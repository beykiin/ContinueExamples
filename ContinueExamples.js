
        // let tarihiGoster=()=>{
        //     let tarih=prompt("Lütfen bir tarih giriniz.")
        //     let gun=""
        //     let ay=""
        //     let yil=""
        //     if(tarih.length==10){
        //         for(let i=0;i<2;i++){
        //             gun+=tarih[i]
        //         }
        //         for(i=3;i<5;i++){
        //             ay+=tarih[i]
        //         }
        //         for(i=6;i<10;i++){
        //             yil+=tarih
        //         } 

        //         gun=parseInt(gun,10)
        //         ay=parseInt(ay,10)

        //         let ayAdi=""

        //         if(ay==1){
        //             ayAdi="Ocak"
        //         }
        //         else if(ay==2){
        //             ayAdi="Şubat"
        //         }
        //         else if(ay==3){
        //             ayAdi="Mart"
        //         }
        //         else if(ay==4){
        //             ayAdi="Nisan"
        //         }
        //         else if(ay==5){
        //             ayAdi="Mayıs"
        //         }
        //         else if(ay==6){
        //             ayAdi="Haziran"
        //         }
        //         else if(ay==7){
        //             ayAdi="Temmuz"
        //         }
        //         else if(ay==8){
        //             ayAdi="Ağustos"
        //         }
        //         else if(ay==9){
        //             ayAdi="Eylül"
        //         }
        //         else if(ay==10){
        //             ayAdi="Ekim"
        //         }
        //         else if(ay==11){
        //             ayAdi="Kasım"
        //         }
        //         else if(ay==12){
        //             ayAdi="Aralık"
        //         }

        //         if(gun>=1 && gun<=31){
        //             alert("Tarih: "+gun+" "+ayAdi+" "+yil)
        //         }
        //     }
            
        // }
        // tarihiGoster()


        // HOCANIN YAPTIĞI DOĞRU OLAN

        let tarihGoster=(tarih)=>{
            let gun=""
            let ay=""
            let yil=""
            let count=0
            for(let i=0;i<tarih.length;i++){
                if(tarih[i]=="."){
                    count++
                    continue
                }
                else if(count==0){
                    gun+=tarih[i]
                }
                else if(count==1){
                    ay+=tarih[i]
                }
                else if(count==2){
                    yil+=tarih[i]
                }
            }
            let newAy=""
            if(ay=="01" || ay=="1"){
                newAy="Ocak"
            }
            else if(ay=="02" || ay=="2"){
                newAy="Şubat"
            }
            else if(ay=="03" || ay=="3"){
                newAy="Mart"
            }
            else if(ay=="04" || ay=="4"){
                newAy="Nisan"
            }
            else if(ay=="05" || ay=="5"){
                newAy="Mayıs"
            }
            else if(ay=="06" || ay=="6"){
                newAy="Haziran"
            }
            else if(ay=="07" || ay=="7"){
                newAy="Temmuz"
            }
            else if(ay=="08" || ay=="8"){
                newAy="Ağustos"
            }
            else if(ay=="09" || ay=="9"){
                newAy="Eylül"
            }
            else if(ay=="10"){
                newAy="Ekim"
            }
            else if(ay=="11"){
                newAy="Kasım"
            }
            else if(ay=="12"){
                newAy="Aralık"
            }
            console.log(gun+" "+newAy+" "+yil)
        }
        tarihGoster("1.9.2005")
    