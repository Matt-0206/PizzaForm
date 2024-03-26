function dataResult(){

    const nome = document.getElementById('form-name').value;
    const adresse = document.getElementById('form-adresse').value;
    const tel = document.getElementById('form-tel').value;
    const mail = document.getElementById('form-email').value;
    const istruzioni = document.getElementById('form-delivery').value;

    const crosta = document.querySelector('input[name="crust"]:checked').value;

    document.getElementById("dati").textContent = `I tuoi dati sono: ${nome}, ${adresse}, ${tel}, ${mail}, ${istruzioni}, ${crosta}`;

    return false;
}