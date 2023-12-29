<template><div><p>Chào các bạn, rất vui vì bạn đã đọc blog này. Hãy để lại bình luận bên dưới nhé ^^</p>
<p>Có lẻ bạn đã nhiều lần cảm thấy chán nản bất lực và đôi khi là muốn chửi tục khi website trường bị chết! Mình cũng vậy, những lúc nộp bài đông hoặc đăng ký gì đó cần lên web trường thì cứ y như rằng nhận lỗi 502 (Lỗi phản hồi tài nguyên không thành công hay nói rõ ra là web sập).</p>
<p>Nếu là một <code v-pre>dev</code> chúng ta phải làm gì đó hạn chế điều này!</p>
<p>Về cơ bản có 3 khả năng cao dẫn đến tình trạng này</p>
<ol>
<li>Quá nhiều người truy cập vào hệ thống</li>
<li>Mạng yếu</li>
<li>Lỗi 500 khiến một số server có cơ chế tự start lại</li>
<li>Một client nào đó gửi yêu cầu liên tục và server không xử lý kịp</li>
</ol>
<p>Trong 4 sự cố trên phụ thuộc rất nhiều vào tài nguyên, dịch vụ deploy web, gói mạng chạy server,...</p>
<p>Riêng chỉ có ý số <code v-pre>4</code> là ta có thể kiểm soát ngay tại server!</p>
<p>Xử lý và cấu hình thế nào thì hãy cùng mình tìm hiểu ngay sau đây nhé! Bật mí là ta sẽ dùng cơ chế <code v-pre>cache</code></p>
<h2 id="su-chiu-tai-cua-server" tabindex="-1"><a class="header-anchor" href="#su-chiu-tai-cua-server" aria-hidden="true">#</a> Sự chịu tải của Server</h2>
<p>Đầu tiên ta tìm hiểu về việc chịu tải của server
Để viết ra một con server chạy được thì quá đơn giản, tuy nhiên việc thiết kế hệ thống thế nào cho tối ưu để tăng độ chịu tải của Server lại được ít người quan tâm. Mình sẽ có một thống kê nhỏ dưới đây:</p>
<ul>
<li>Mình lấy 3 server làm mẫu <em>(chỉ bàn về ví dụ cơ bản như Hello World)</em> về mức độ chịu tải của <code v-pre>Bun.js</code>, <code v-pre>Node.js</code> và <code v-pre>SpringBoot</code>.</li>
<li>Biết các thông số về phần cứng là như nhau và test trên 2 port trên cùng một máy.</li>
</ul>
<table>
<thead>
<tr>
<th>Server</th>
<th>Request/giây</th>
<th>Số Request được chạy tối đa</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>SpringBoot</code></td>
<td>23435</td>
<td>980273</td>
</tr>
<tr>
<td><code v-pre>Bun.js</code></td>
<td>50520</td>
<td>981573</td>
</tr>
<tr>
<td><code v-pre>Node.js</code></td>
<td>21081</td>
<td>973370</td>
</tr>
</tbody>
</table>
<blockquote>
<p>Lưu ý: Ví dụ chỉ mang tính chất tham khảo vì còn phụ thuộc vào rất nhiều yếu tố.</p>
</blockquote>
<h2 id="y-tuong" tabindex="-1"><a class="header-anchor" href="#y-tuong" aria-hidden="true">#</a> Ý tưởng</h2>
<p>Trên internet sẽ có rất nhiều cách để kiểm soát việc spam request. Mình sẽ nếu ra cách thông dụng nhất.</p>
<p>Không chỉ thông dụng, nó còn mang lại hiệu quả cao, mình đã áp dụng vào Đồ án tốt nghiệp và nhận được sự phản hồi rất tích cực từ hồi đồng chấm bài nên mình sẽ chia sẽ nhá.</p>
<p>Về cơ bản chúng ta sẽ làm thế nào để lưu lại được IP của thiết bị gửi Request lần đầu cho website của ta và kiểm tra các lần Request tiếp theo. Nếu số lượng Request quá nhiều thì mình sẽ chặn IP đó lại và không cho Request nữa!</p>
<p>Vấn đề đặt ra là làm sao để tốc độ kiểm tra đó phải thật nhanh để không làm tệ đi trãi nghiệm người dùng và chậm độ phản hồi của mỗi Request?</p>
<blockquote>
<p>Câu trả lời là dùng cơ chế Cache và Redis</p>
</blockquote>
<h2 id="cac-khai-niem-co-ban" tabindex="-1"><a class="header-anchor" href="#cac-khai-niem-co-ban" aria-hidden="true">#</a> Các khái niệm cơ bản</h2>
<h3 id="cache-la-gi" tabindex="-1"><a class="header-anchor" href="#cache-la-gi" aria-hidden="true">#</a> Cache là gì</h3>
<p>Cache là gì: Cache là một kỹ thuật lưu trữ bản sao dữ liệu đã xử lý trước đó để giảm thời gian truy cập và tăng tốc độ xử lý.</p>
<p>Ví dụ thực tế: Trong trình duyệt web, cache giữ lại hình ảnh và CSS trước đó để tránh việc tải lại từ máy chủ, giúp giảm thời gian tải trang.</p>
<blockquote>
<p>À vậy ra chúng ta vẫn ngầm sử dụng cơ chế <code v-pre>Cache</code> mà không hề hay biết!</p>
</blockquote>
<p>Với <code v-pre>Cache</code> ta có thể dễ dàng ghi đè dữ liệu lên nhau một cách dễ dàng.</p>
<p>Ta chỉ cần tạo ra một Object lưu lại các thông tin như:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BlockSpam</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>
	<span class="token class-name">Long</span> time<span class="token punctuation">;</span>          <span class="token comment">// thòi gian gần nhất gọi Request</span>
	<span class="token class-name">Integer</span> requests<span class="token punctuation">;</span>   <span class="token comment">// Số Request đã gọi trong 1s</span>
	
<span class="token punctuation">}</span>
</code></pre></div><p>Như vậy ta sẽ ghi lại từng IP gọi API và cập nhật lại time đồng thời tăng biến <code v-pre>requests</code> lên sau mỗi lần gọi.</p>
<p>Đã xong phần xử lí, ta cần nghĩ đến việc gọi thế nào cho tối ưu nhất mang lại tốc độ cao nhất. vì số data này ta cần phải lưu lại!</p>
<p>Ta cần một <code v-pre>Database</code> có thể lưu lại dữ liệu, phản hồi nhanh chóng và xóa dữ liệu một cách tự động (vì ta chỉ khóa IP đó trong 1 lúc chứ không thể khóa vĩnh viễn được)</p>
<p>Mình biết một DB có thể giúp chúng ta những việc trên, đó là  <code v-pre>Redis</code></p>
<h3 id="redis-la-gi" tabindex="-1"><a class="header-anchor" href="#redis-la-gi" aria-hidden="true">#</a> Redis là gì</h3>
<p>Redis là một hệ thống cơ sở dữ liệu in-memory (lưu trữ trong bộ nhớ RAM) mã nguồn mở, thường được sử dụng như một cơ sở dữ liệu key-value và làm cache.</p>
<p><strong>Redis lưu ở RAM</strong> bởi vậy có tốc độ đọc ghi dữ liệu nhanh gấp <strong>1.000 lần</strong> so với SQL (My-SQL hay MS SQL).</p>
<ul>
<li>So về thời gian thì <strong>Redis &gt; MongoDB &gt; Firebase &gt; SQL</strong></li>
</ul>
<p><strong>Redis có thể</strong> tự xóa dữ liệu nếu như chúng hết hạn</p>
<ul>
<li>Ví dụ mình lưu một JSON và đặt thời gian cho nó là <strong>5s</strong> thì sau <em>5s</em> nó sẽ tự biến mất (Cơ chế này tương tự <strong>Trigger</strong> trong SQL)</li>
</ul>
<h2 id="bat-đau-code" tabindex="-1"><a class="header-anchor" href="#bat-đau-code" aria-hidden="true">#</a> Bắt đầu code</h2>
<h3 id="tai-nguyen" tabindex="-1"><a class="header-anchor" href="#tai-nguyen" aria-hidden="true">#</a> Tài nguyên</h3>
<p>Trước tiên chúng mình cần có các tài nguyên sau:</p>
<ul>
<li>Redis CLI: vì Redis chỉ có thể cài trên MacOS và Linux nên các bạn nào dùng Windows có thể vào <a href="https://github.com/dangth12/windows-Redis-x64-3.0.504" target="_blank" rel="noopener noreferrer">repo sau</a> của mình và tải về nhé</li>
<li>VS Code hoặc Spring Tools Suite</li>
</ul>
<h3 id="bat-đau-du-an" tabindex="-1"><a class="header-anchor" href="#bat-đau-du-an" aria-hidden="true">#</a> Bắt đầu dự án</h3>
<p>Đầu tiên bạn hãy chạy Redis lên (trong Repo mình có hướng dẫn)</p>
<h4 id="cai-cac-thu-vien-can-thiet" tabindex="-1"><a class="header-anchor" href="#cai-cac-thu-vien-can-thiet" aria-hidden="true">#</a> Cài các thư viện cần thiết</h4>
<div class="language-xml ext-xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>redis.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>jedis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>5.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.aspectj<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>aspectjrt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>1.9.7<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span> 
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">></span></span>
</code></pre></div><h4 id="cac-bien-moi-truong-can-thiet" tabindex="-1"><a class="header-anchor" href="#cac-bien-moi-truong-can-thiet" aria-hidden="true">#</a> Các biến môi trường cần thiết</h4>
<div class="language-properties ext-properties"><pre v-pre class="language-properties"><code><span class="token comment"># Redis Configuration</span>
<span class="token key attr-name">spring.redis.host</span><span class="token punctuation">=</span><span class="token value attr-value">localhost</span>
<span class="token key attr-name">spring.redis.port</span><span class="token punctuation">=</span><span class="token value attr-value">6379</span>
<span class="token key attr-name">spring.redis.password</span><span class="token punctuation">=</span>             
<span class="token key attr-name">spring.redis.database</span><span class="token punctuation">=</span><span class="token value attr-value">0             </span>
<span class="token key attr-name">spring.redis.cache.ttl</span><span class="token punctuation">=</span><span class="token value attr-value">10</span>

<span class="token comment">#10 requests trong 1P</span>
<span class="token key attr-name">davis.redis.ttl</span> <span class="token punctuation">=</span> <span class="token value attr-value">60	</span>
<span class="token key attr-name">davis.redis.requests</span> <span class="token punctuation">=</span> <span class="token value attr-value">10</span>
</code></pre></div><h4 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> Config</h4>
<p>Cấu hình cho các kết nối tới <code v-pre>Redis</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>davis<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Bean</span>
	<span class="token keyword">public</span> <span class="token class-name">JedisConnectionFactory</span> <span class="token function">connectionfactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">RedisStandaloneConfiguration</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisStandaloneConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		config<span class="token punctuation">.</span><span class="token function">setHostName</span><span class="token punctuation">(</span><span class="token string">"localhost"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		config<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">6379</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">JedisConnectionFactory</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Bean</span>
	<span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">></span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">></span></span> templ <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		templ<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span><span class="token function">connectionfactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		templ<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		templ<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		templ<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JdkSerializationRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		templ<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JdkSerializationRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		templ<span class="token punctuation">.</span><span class="token function">setEnableTransactionSupport</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		templ<span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> templ<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> Model</h4>
<p>Khỏi tạo đối tượng sau đây để lưu vào Cache</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>davis<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BlockSpam</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span>
	<span class="token class-name">Long</span> currenTime<span class="token punctuation">;</span>
	<span class="token class-name">Integer</span> countrequest<span class="token punctuation">;</span>
	
	
<span class="token punctuation">}</span>
</code></pre></div><h4 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> Service</h4>
<p>Tạo một Service để tương tác với <code v-pre>Redis</code></p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>davis<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RateLimiterService</span> <span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span> redisTemplate<span class="token punctuation">;</span>

	<span class="token annotation punctuation">@Autowired</span>
	<span class="token keyword">public</span> <span class="token class-name">RateLimiterService</span><span class="token punctuation">(</span><span class="token class-name">StringRedisTemplate</span> redisTemplate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>redisTemplate <span class="token operator">=</span> redisTemplate<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">allowRequest</span><span class="token punctuation">(</span><span class="token class-name">String</span> ipAddress<span class="token punctuation">,</span> <span class="token keyword">long</span> maxRequests<span class="token punctuation">,</span> <span class="token keyword">long</span> timeIntervalInSeconds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">"ip:"</span> <span class="token operator">+</span> ipAddress<span class="token punctuation">;</span>
		<span class="token class-name">Long</span> currentTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">;</span>
		<span class="token comment">//Long previousRequestTime = (Long) redisTemplate.opsForValue().get(key);</span>
		<span class="token class-name">BlockSpam</span> b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BlockSpam</span><span class="token punctuation">)</span> redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// nếu chưa request trong 10p</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>b <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">BlockSpam</span> bs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BlockSpam</span><span class="token punctuation">(</span>currentTime<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> bs<span class="token punctuation">,</span> timeIntervalInSeconds<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		b<span class="token punctuation">.</span><span class="token function">setCountrequest</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token function">getCountrequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token function">getCountrequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> maxRequests<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> b<span class="token punctuation">,</span> timeIntervalInSeconds<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// ngượpc lại</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Bi chan trong "</span><span class="token operator">+</span> <span class="token punctuation">(</span>currentTime <span class="token operator">-</span> b<span class="token punctuation">.</span><span class="token function">getCurrenTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Tạo một Service để lưu model vào Cache</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>davis<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RateLimitService</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">StringRedisTemplate</span> redisTemplate<span class="token punctuation">;</span>

    
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">public</span> <span class="token class-name">RateLimitService</span><span class="token punctuation">(</span><span class="token class-name">StringRedisTemplate</span> redisTemplate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>redisTemplate <span class="token operator">=</span> redisTemplate<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isAllowed</span><span class="token punctuation">(</span><span class="token class-name">String</span> userId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">"rate_limit:"</span> <span class="token operator">+</span> userId<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Instant</span> now <span class="token operator">=</span> <span class="token class-name">Instant</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Instant</span> lastRequestTime <span class="token operator">=</span> <span class="token class-name">Instant</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span>
                redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">:</span> now<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Kiểm tra xem đã đủ thời gian giữa các yêu cầu chưa</span>
        <span class="token class-name">Duration</span> timeElapsed <span class="token operator">=</span> <span class="token class-name">Duration</span><span class="token punctuation">.</span><span class="token function">between</span><span class="token punctuation">(</span>lastRequestTime<span class="token punctuation">,</span> now<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>timeElapsed<span class="token punctuation">.</span><span class="token function">getSeconds</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Reset thời gian cho yêu cầu tiếp theo và cập nhật vào Redis</span>
            redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> now<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// Chưa đủ thời gian giữa các yêu cầu</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Viết một Service tạo <code v-pre>@Anotation</code> tự động check Request</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>davis<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisCheckAspect</span> <span class="token punctuation">{</span>
	

	<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${davis.redis.ttl}"</span><span class="token punctuation">)</span>	<span class="token comment">// thời gian tồn tại của một khiên (60s)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> ttl<span class="token punctuation">;</span>
	
	<span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${davis.redis.requests}"</span><span class="token punctuation">)</span>	<span class="token comment">// số reuqest được chạy trong 1 phiên khiên (10)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> requests<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisService</span> redisService<span class="token punctuation">;</span>
    
    <span class="token comment">// lấy ra IP của Client</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">getClientIp</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span> ipAddress <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">"X-Forwarded-For"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ipAddress <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> ipAddress<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">"unknown"</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>ipAddress<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			ipAddress <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">"Proxy-Client-IP"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ipAddress <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> ipAddress<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">"unknown"</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>ipAddress<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			ipAddress <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">"WL-Proxy-Client-IP"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ipAddress <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> ipAddress<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">"unknown"</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>ipAddress<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			ipAddress <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">"HTTP_CLIENT_IP"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ipAddress <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> ipAddress<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">"unknown"</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>ipAddress<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			ipAddress <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">"HTTP_X_FORWARDED_FOR"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>ipAddress <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> ipAddress<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token string">"unknown"</span><span class="token punctuation">.</span><span class="token function">equalsIgnoreCase</span><span class="token punctuation">(</span>ipAddress<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			ipAddress <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getRemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>ipAddress<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">"0:0:0:0:0:0:0:1"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// Lấy địa chỉ IPv4 cho localhost</span>
				<span class="token keyword">try</span> <span class="token punctuation">{</span>
					<span class="token class-name">InetAddress</span> inetAddress <span class="token operator">=</span> <span class="token class-name">InetAddress</span><span class="token punctuation">.</span><span class="token function">getLocalHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					ipAddress <span class="token operator">=</span> inetAddress<span class="token punctuation">.</span><span class="token function">getHostAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">UnknownHostException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// Xử lý lỗi nếu cần</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> ipAddress<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Around</span><span class="token punctuation">(</span><span class="token string">"@annotation(com.davis.RedisCheck)"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">checkRedis</span><span class="token punctuation">(</span><span class="token class-name">ProceedingJoinPoint</span> joinPoint<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
    	
    	 <span class="token comment">// Lấy request hiện tại</span>
        <span class="token class-name">ServletRequestAttributes</span> attributes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributes</span><span class="token punctuation">)</span> <span class="token class-name">RequestContextHolder</span><span class="token punctuation">.</span><span class="token function">currentRequestAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> attributes<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Thực hiện kiểm tra và xử lý Redis ở đây</span>
        <span class="token comment">// Ví dụ: Kiểm tra một key trong Redis và xử lý dựa trên kết quả</span>
        <span class="token keyword">boolean</span> isValid <span class="token operator">=</span> redisService<span class="token punctuation">.</span><span class="token function">allowRequest</span><span class="token punctuation">(</span><span class="token function">getClientIp</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">,</span> requests<span class="token punctuation">,</span> ttl<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Thay thế bằng phương thức kiểm tra thực tế</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>isValid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// Nếu request hợp lệ, tiếp tục thực hiện method bằng cách gọi joinPoint.proceed()</span>
            <span class="token keyword">return</span> joinPoint<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// Nếu không hợp lệ, có thể trả về lỗi hoặc xử lý khác</span>
        	<span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span>TOO_MANY_REQUESTS<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token string">"Too many requests"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h4 id="controlers" tabindex="-1"><a class="header-anchor" href="#controlers" aria-hidden="true">#</a> Controlers</h4>
<p>Viết một API để test thôi</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>davis<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Controller</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RateLimiterService</span> rateLimiterService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@RedisCheck</span> <span class="token comment">// Áp dụng kiểm tra Redis trước khi xử lý method này</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/my-endpoint"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">myEndpoint</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> ipAddress <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getRemoteAddr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// Cho phép tối đa 10 request trong 1 phút từ cùng một IP</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>rateLimiterService<span class="token punctuation">.</span><span class="token function">allowRequest</span><span class="token punctuation">(</span>ipAddress<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>             
            <span class="token comment">// Xử lý request ở đây</span>
            <span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token string">"Request allowed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token class-name">HttpStatus</span><span class="token punctuation">.</span>TOO_MANY_REQUESTS<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token string">"Too many requests"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></div></template>
