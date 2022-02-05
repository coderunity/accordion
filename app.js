
const a_header = document.querySelectorAll('.accodion-header');

a_header.forEach(item => {

    item.addEventListener('click', function(){

        a_header.forEach(item =>{
            item.classList.remove('active');
            item.nextElementSibling.style.height = '0px'
        });

        item.classList.toggle('active');
        
        


        if(item.classList.contains('active')){
            item.nextElementSibling.style.height =  item.nextElementSibling.scrollHeight + 'px'; 
        }else{
            item.nextElementSibling.style.height = '0px'
        }


    });

});