window.addEventListener('load',()=>{
    let progressBars=document.querySelectorAll('.progress-bar');
    let values=[
        '80%',
        '60%',
        '70%',
        '90%',
        '85%',
        '75%',
        '90%',
        '90%',
        '65%'
    ];
    progressBars.forEach((progress,index)=> {
         progress.style.width=values[index];
    });
})