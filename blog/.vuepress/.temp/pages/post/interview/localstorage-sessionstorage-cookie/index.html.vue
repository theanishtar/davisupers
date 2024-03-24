<template><div><p>Trong công nghệ xây dựng web-app hiện nay, có thể nói mô hình SCR (Client Side Rendering) đang được phát triển một cách vượt bật.</p>
<p>Cùng với sự ưa chuộng ấy, <mark>Rest API</mark> đóng vai trò rất quan trọng trong việc kết nối <em><strong>Back-end</strong></em> và <em><strong>Front-end</strong></em>...</p>
<p>Hôm nay hãy cùng mình phân biệt hai khái niệm API gồm <code v-pre>Restful</code> và <code v-pre>Non-Restful</code> nha ^^</p>
<p><img src="https://github.com/dangtranhuu/images/blob/main/frogcyber/post/interview/api/banner.png?raw=true" alt=""></p>
<h2 id="khai-niem" tabindex="-1"><a class="header-anchor" href="#khai-niem" aria-hidden="true">#</a> Khái niệm</h2>
<h2 id="tong-quan" tabindex="-1"><a class="header-anchor" href="#tong-quan" aria-hidden="true">#</a> Tổng quan</h2>
<table>
<thead>
<tr>
<th></th>
<th>Cookie</th>
<th>Local Storage</th>
<th>Session Storage</th>
</tr>
</thead>
<tbody>
<tr>
<td>Capacity</td>
<td>4kb</td>
<td>10mb</td>
<td>5mb</td>
</tr>
<tr>
<td>Browsers</td>
<td>HTML4/HTML5</td>
<td>HTML5</td>
<td>HTML5</td>
</tr>
<tr>
<td>Acccessible from</td>
<td>Any window</td>
<td>Anywindow</td>
<td>Same tab</td>
</tr>
<tr>
<td>Expries</td>
<td>Manually set</td>
<td>Never</td>
<td>On tab close</td>
</tr>
<tr>
<td>Storage Location</td>
<td>Browser and server</td>
<td>Browser only</td>
<td>Browser only</td>
</tr>
<tr>
<td>Sent with request</td>
<td>Yes</td>
<td>No</td>
<td>No</td>
</tr>
</tbody>
</table>
<div class="language-cpp ext-cpp"><pre v-pre class="language-cpp"><code><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span>
<span class="token operator">|</span>                <span class="token operator">|</span> Chrome <span class="token operator">|</span> Firefox <span class="token operator">|</span> Safari    <span class="token operator">|</span>  IE    <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span>
<span class="token operator">|</span> LocalStorage   <span class="token operator">|</span> <span class="token number">10</span>MB   <span class="token operator">|</span> <span class="token number">10</span>MB    <span class="token operator">|</span> <span class="token number">5</span>MB       <span class="token operator">|</span> <span class="token number">10</span>MB   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span>
<span class="token operator">|</span> SessionStorage <span class="token operator">|</span> <span class="token number">10</span>MB   <span class="token operator">|</span> <span class="token number">10</span>MB    <span class="token operator">|</span> Unlimited <span class="token operator">|</span> <span class="token number">10</span>MB   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">-</span><span class="token operator">+</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">--</span><span class="token operator">+</span>
</code></pre></div></div></template>
