let numero = 1

do{
    if (numero % 2 != 0){
        let fatorial = 1
        let multiplicador = 1

        for (multiplicador == 1; multiplicador <= numero; multiplicador++){
            fatorial = fatorial * multiplicador
        }
        document.write("Fatorial de "+ numero+ " é "+ fatorial+"<br>")
    }
    numero += 1

}while (numero <= 10)