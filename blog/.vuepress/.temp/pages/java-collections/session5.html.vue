<template><div><h1 id="_6-set" tabindex="-1"><a class="header-anchor" href="#_6-set" aria-hidden="true">#</a> 6. Set</h1>
<p>Trong Java, một <mark>set</mark> là một tập hợp các phần tử duy nhất không theo thứ tự. Điều này có nghĩa là mỗi phần tử trong set chỉ xuất hiện một lần và không có thứ tự cụ thể nào được đảm bảo cho các phần tử. Set trong Java cung cấp một cách để lưu trữ tập hợp các phần tử mà không có bất kỳ sự lặp lại nào và không quan tâm đến thứ tự của chúng.</p>
<p>Trong Java, bạn có thể sử dụng một trong các lớp cung cấp bởi Java Collection Framework để thực hiện set. Hai lớp phổ biến nhất để thực hiện set là <strong>HashSet</strong> và <strong>TreeSet</strong>.</p>
<ul>
<li>
<p><strong>HashSet</strong>: Lớp này sử dụng bảng băm để lưu trữ các phần tử và cung cấp thời gian truy cập và thao tác tốt nhất trung bình O(1). Tuy nhiên, không có sự đảm bảo về thứ tự của các phần tử.</p>
</li>
<li>
<p><strong>TreeSet</strong>: Lớp này sử dụng cấu trúc dữ liệu cây để lưu trữ các phần tử và duy trì chúng theo thứ tự tăng dần. Thao tác trên <strong>TreeSet</strong> có thể chậm hơn <strong>HashSet</strong> nhưng phần tử được lưu trữ trong một <strong>TreeSet</strong> sẽ được sắp xếp theo thứ tự tự nhiên.</p>
</li>
</ul>
<p>Dưới đây là một ví dụ đơn giản về cách sử dụng <strong>HashSet</strong> trong Java:</p>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashSet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Set</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Khởi tạo một HashSet</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Thêm các phần tử vào HashSet</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"apple"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"banana"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"orange"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">"apple"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// phần tử trùng lặp, sẽ không được thêm vào set</span>

        <span class="token comment">// In ra các phần tử trong HashSet</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> element <span class="token operator">:</span> set<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="language-text ext-text"><pre v-pre class="language-text"><code>orange
banana
apple
</code></pre></div><p>Set dùng để giải quyết những bài toán mang tính duy nhất, ví dụ tìm phần tử lặp lại hai lần trong mảng.</p>
<h2 id="vi-du" tabindex="-1"><a class="header-anchor" href="#vi-du" aria-hidden="true">#</a> Ví dụ</h2>
<h3 id="_287-tim-so-trung-lap" tabindex="-1"><a class="header-anchor" href="#_287-tim-so-trung-lap" aria-hidden="true">#</a> 287. Tìm số trùng lặp</h3>
<p>Cho một mảng các số nguyên chứa số nguyên trong đó mỗi số nguyên nằm trong phạm vi bao gồm. <code v-pre>nums</code> <code v-pre>n + 1</code> <code v-pre>[1, n]</code></p>
<p>Chỉ có một số lặp lại trong , trả về số lặp lại này. <code v-pre>nums</code></p>
<p>Bạn phải giải quyết vấn đề mà không sửa đổi mảng và chỉ sử dụng thêm không gian không đổi. <code v-pre>nums</code></p>
<h4 id="vi-du-1" tabindex="-1"><a class="header-anchor" href="#vi-du-1" aria-hidden="true">#</a> Ví dụ 1:</h4>
<p>Input: nums = [1, 3, 4, 2, 2] <br/> Output: 2</p>
<h4 id="vi-du-2" tabindex="-1"><a class="header-anchor" href="#vi-du-2" aria-hidden="true">#</a> Ví dụ 2:</h4>
<p>Input: nums = [3, 1, 3, 4, 2] <br/> Output: 3</p>
<h4 id="vi-du-3" tabindex="-1"><a class="header-anchor" href="#vi-du-3" aria-hidden="true">#</a> Ví dụ 3:</h4>
<p>Input: nums = [3, 3, 3, 3, 3] <br/> Output: 3</p>
<h4 id="rang-buoc" tabindex="-1"><a class="header-anchor" href="#rang-buoc" aria-hidden="true">#</a> Ràng buộc:</h4>
<ul>
<li><code v-pre>1 &lt;= n &lt;= 105</code></li>
<li><code v-pre>nums.length == n + 1</code></li>
<li><code v-pre>1 &lt;= nums[i] &lt;= n</code>
Tất cả các số nguyên trong chỉ xuất hiện một lần ngoại trừ chính xác một số nguyên xuất hiện hai hoặc nhiều lần. <code v-pre>nums</code></li>
</ul>
<h4 id="theo-doi" tabindex="-1"><a class="header-anchor" href="#theo-doi" aria-hidden="true">#</a> Theo dõi:</h4>
<p>Làm thế nào chúng ta có thể chứng minh rằng ít nhất một số trùng lặp phải tồn tại trong ? <code v-pre>nums</code>
Bạn có thể giải quyết vấn đề trong độ phức tạp thời gian chạy tuyến tính không?</p>
<details class="custom-container details"><summary>BÀI GIẢI</summary>
<div class="language-java ext-java"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">findDuplicate</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">:</span> nums<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> i<span class="token punctuation">;</span>
            set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></details>
</div></template>
