console.log('Hello, world!');
document.addEventListener('DOMContentLoaded', function() {
    const scroll=document.querySelector('.overflow-x-scroll');
    const left=document.querySelector('#left');
    const right=document.querySelector('#right');
    const scrollAmount=200;
    left.addEventListener('click',()=>{
        scroll.scrollBy({left: -scrollAmount, behavior: 'smooth'});
    });
    right.addEventListener('click',()=>{
        scroll.scrollBy({left: scrollAmount, behavior: 'smooth'});
    });
    left.addEventListener('mouseover',()=>{
        left.style.backgroundColor='rgba(255,255,255,1)';
        left.style.color='black';
        left.style.cursor='pointer';
    });
    left.addEventListener('mouseout',()=>{
        left.style.backgroundColor='rgba(255,255,255,0.3)';
    });

    right.addEventListener('mouseover',()=>{
        right.style.backgroundColor='rgba(255,255,255,1)';
        right.style.color='black';
        right.style.cursor='pointer';
    });
    right.addEventListener('mouseout',()=>{
        right.style.backgroundColor='rgba(255,255,255,0.3)';
    });
    
    const images=document.querySelectorAll('#images');
    images.forEach((image)=>{
        image.addEventListener('mouseover',()=>{
            image.style.transition='all 0.5s';
        });
    });


    // images.forEach((image)=>{
    //     image.addEventListener('mouseout',()=>{
    //         image.style.transform='scale(1)';
    //     });
    // });
    document.querySelectorAll('.faq').forEach((faqItem)=>{
      faqItem.addEventListener('click',()=>{
          const answer=faqItem.nextElementSibling;  
          if(answer.classList.contains('hidden')) {
              answer.classList.remove('hidden');
              answer.classList.remove('rounded-2xl');
              faqItem.classList.remove('rounded-2xl');
              answer.classList.remove('mt-1');
            faqItem.classList.remove('hover:bg-[rgba(255,255,255,0.5)]');
              faqItem.classList.add('rounded-t-2xl');
              answer.classList.add('rounded-b-2xl');
          }
          else{
              answer.classList.add('hidden');
              faqItem.classList.add('hover:bg-[rgba(255,255,255,0.5)]');
              faqItem.classList.add('rounded-2xl');
              answer.classList.add('rounded-2xl');
          }
      });
    });

});


