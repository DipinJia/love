let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no")
let questionText = document.getElementById("question")
let mainImage = document.getElementById("mainImage")

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "真的不喜欢？",
    "我不信。",
    "我要生气了！",
    "真的吗T^T",
    "不喜欢",
];

// No 按钮点击事件
noButton.addEventListener("click",function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // 让图片和文字往上移动
    let moveUp = clickCount * 25;
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化 (前 5 次变化)
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化 (前五次变化)
    if (clickCount === 1) mainImage.src = "b.png"; // 怀疑
    if (clickCount === 2) mainImage.src = "c.png";   // 委屈
    if (clickCount === 3) mainImage.src = "d.png";   // 生气
    if (clickCount === 4) mainImage.src = "e.png";  // 哭泣
    if (clickCount >= 5) mainImage.src = "f.png";   // 之后一直是哭泣

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-next">最喜欢你啦ꈍ3ꈍ！</h1>
            <img src="g.png" alt="求婚" class="yes/image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});