function message(anketa)
{
    let letters = /[A-Za-z]/;
    let post = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    let fail = false;
    let name = form.name.value;
    let mail = form.mail.value;

    if(letters.test(name) === false)
        fail = "Неправильно введене ім'я!";
    else if(post.test(mail) === false)
        fail = "Неправильно введений e-mail !";
    if(fail)
        alert(fail);
    else return true;
}



