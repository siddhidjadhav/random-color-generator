const containerE1=document.querySelector(".container")

for(let i=0;i<30;i++)
{
    const colorContainerE1=document.createElement("div")
    colorContainerE1.classList.add("color-container");
    containerE1.appendChild(colorContainerE1);

}
const colorContainersE1=document.querySelectorAll(".color-container");

generateColors();

function generateColors()
{
colorContainersE1.forEach((colorContainersE1)=>{
const newColorCode=randomColor();

colorContainersE1.style.backgroundColor="#"+newColorCode;
colorContainersE1.innerText="#"+newColorCode;

})
}



function randomColor()
{
    const chars="0123456789abcdef";
    const colorCodeLength=6;
    let colorCode=""
    for(let j=0;j<colorCodeLength;j++)
    {
        const randomNum=Math.floor(Math.random()*chars.length);
        colorCode+=chars.substring(randomNum,randomNum+1);

    
    }
return colorCode;
}