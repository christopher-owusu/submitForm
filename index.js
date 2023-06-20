function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        comName: document.getElementById("companyName").value,
        mss: document.getElementById("message").value
    }
    const serviceID = "service_t6zaeai"
    const templateID = "template_moag7xe"

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("companyName").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert('mail sent sucessfully');
    })
    .catch((err)=>console.log(err))
}