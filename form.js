function submitData() {
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);

    if (name ==''){
       return alert("Nama Wajib Diisi")
    } else if (email == ''){
        return alert("email Wajib Diisi")
    } else if (phone == ''){
        return alert("Phone Number Wajib Diisi")
    } else if (subject == ''){
        return alert("Subject Wajib Diisi")
    } else if (message == ''){
        return alert("Message Wajib Diisi")
    }


    let emailReceiver = 'riziqstankovic02@gmail.com'

    let a = document.createElement('a') //pembuatan tag a

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=hello%2C my name ${name}%0D%0Ayou can call my number ${phone}%0D%0A${message}%0D%0AThank you very much`
    
    a.click() //menjalankan tag a

}