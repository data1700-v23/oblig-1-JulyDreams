const alleBillettene=[];
function registrerBillettene(){
    let ut= "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th>" +
        "<th>Etternavn</th><th>Telefonnr</th><th>Epost</th>"+
        "</tr>";
    for (let i of alleBillettene){
        ut+="<tr>";
        ut+="<td>"+i.velgfilm+"</td><td>"+i.antall+"</td><td>"+i.fornavn+"</td><td>"+
            i.etternavn+"</td><td>"+i.telefonnr+"</td><td>"+i.epost+"</td>";
        ut+="</tr>";
    }
    ut+="</table>";
    //if setning?
    document.getElementById("alleBillettene").innerHTML=ut; //skriver ut arrayet på siden
}
function registrer(){
    const velgfilm = document.getElementById("velgfilm").value;
    const antall = document.getElementById("antall").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;
    let feil = "Må skrive noe inn i ";
    let bol = true;

    if (velgfilm=="Velg film her"){
        bol=false;
        document.getElementById("feilVelgFilm").innerHTML="Du må velge en film.";
    }else{
        document.getElementById("feilVelgFilm").innerHTML="";//nullstiller span
    }

    if (isNaN(antall) || !antall) {
        bol=false;
        document.getElementById("feilAntall").innerHTML="Antall må være et tall";
    }else{
        document.getElementById("feilAntall").innerHTML= "";
    }

    if (!fornavn){
        bol=false;
        document.getElementById("feilFornavn").innerHTML=feil+"fornavn.";
    }else{
        document.getElementById("feilFornavn").innerHTML="";
    }
    if (!etternavn){
        bol=false;
        document.getElementById("feilEtternavn").innerHTML=feil+"etternavn.";
    }else{
        document.getElementById("feilEtternavn").innerHTML="";
    }
    if (!telefonnr){
        bol=false;
        document.getElementById("feilTelefonnr").innerHTML=feil+"telefonnummer.";
    }else{
        document.getElementById("feilTelefonnr").innerHTML="";
    }
    if (!epost){
        bol=false;
        document.getElementById("feilEpost").innerHTML=feil+"epost.";
    }else{
        document.getElementById("feilEpost").innerHTML="";
    }

    const billett = {
        velgfilm : velgfilm,
        antall : antall,
        fornavn : fornavn,
        etternavn : etternavn,
        telefonnr : telefonnr,
        epost : epost
    };
    if (bol){
        alleBillettene.push(billett); //legger input i arrayet "billett"
    }

    registrerBillettene()
    tom();
}
function tom(){
    document.getElementById("velgfilm").value="Velg film her"; //nullstiller input
    document.getElementById("antall").value="";
    document.getElementById("fornavn").value="";
    document.getElementById("etternavn").value="";
    document.getElementById("telefonnr").value="";
    document.getElementById("epost").value="";
}

function slett(){
    alleBillettene.length=0;
    document.getElementById("alleBillettene").innerHTML = "";
    tom();

}

//mangler: ikke lagre noe data når det er feilmeldinger
//er det mulig å forkorte koden
//hvordan få opp "Velg film her" som label for dropdown menu for valg av film