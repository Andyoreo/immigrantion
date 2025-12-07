// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. 获取 DOM 元素
    const playButton = document.querySelector('.control-btn'); // 假设第一个是播放按钮
    const wordGroups = document.querySelectorAll('.word-group');
    const sentenceText = "Excuse me do you have this shirt"; // 待播放的英文句子

    // --- 2. 模拟音频播放功能 ---
    
    // 实际项目中，这里会调用一个 TTS (Text-to-Speech) API 服务
    function speakSentence(text) {
        console.log(`[TTS Service] 尝试播放句子: "${text}"`);
        
        // 📢 注意：这是模拟功能。
        // 在实际应用中，您需要：
        // 1. 调用 TTS API (例如 Google Cloud Text-to-Speech, Microsoft Azure Speech)
        // 2. 将 API 返回的音频数据流或 URL 传递给 HTML Audio 对象进行播放。

        // 模拟播放中的用户反馈
        playButton.textContent = '▶️ 播放中...';
        playButton.disabled = true;

        // 模拟 1.5 秒后播放结束
        setTimeout(() => {
            playButton.textContent = "Ctrl + '";
            playButton.disabled = false;
            console.log("[TTS Service] 播放完成。");
            alert(`模拟：句子 "${text}" 播放完毕！`);
        }, 1500);
    }

    // 绑定播放按钮的点击事件
    playButton.addEventListener('click', () => {
        if (!playButton.disabled) {
            speakSentence(sentenceText);
        }
    });

    // 绑定键盘快捷键 (Ctrl + ')
    document.addEventListener('keydown', (event) => {
        // 检查是否按下了 Ctrl 键和单引号键 (key: ')
        if (event.ctrlKey && event.key === "'") {
            event.preventDefault(); // 阻止浏览器默认行为
            if (!playButton.disabled) {
                speakSentence(sentenceText);
            }
        }
    });


    // --- 3. 单词点击高亮功能 ---

    wordGroups.forEach(group => {
        const wordElement = group.querySelector('.word');
        if (wordElement) {
            group.addEventListener('click', () => {
                // 切换高亮样式
                group.classList.toggle('highlighted');
                console.log(`点击了单词: ${wordElement.textContent}`);
                
                // 实际应用中，点击单词还可以：
                // 1. 显示详细的词典信息
                // 2. 将单词加入生词本 (需后端支持)
            });
        }
    });
});