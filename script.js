//pegar cada link de dropdown
var link = window.document.querySelectorAll('.drop');

//quando clicar nos links ele vai pegar a ul e vai colocar ou tirar dela a classe active
link.forEach(element => {
    element.addEventListener('click', () => {
        //alert('hellow world!');
        let ul = element.nextElementSibling;
        ul.classList.toggle('active');
    });
});

