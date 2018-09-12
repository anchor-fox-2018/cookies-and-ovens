// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class KueCoklat{
    constructor(){
        this._Nama_Kue = "Kue coklat";
        this._Lama_Dioven = 20;
    }
}
class KueKacang{
    constructor(){
        this._Nama_Kue = "Kue kacang";
        this._Lama_Dioven = 30;
    }
}
class KueKeju{
    constructor(){
        this._Nama_Kue = "Kue keju";
        this._Lama_Dioven = 35;
    }
}
class AyoMasak{
    constructor(time,lamaDiOven){
        this._time = time
        this._data_kue = this.extractData();
        this._proses = this.masak(lamaDiOven)
    }
    masak(lamaDiOven){
        for(let i = 0;i < this._data_kue.length;i++){
            for(let j = 1;j < lamaDiOven;j++){
                let tengah = this._data_kue[i]._Lama_Dioven/2;
                if(j <= tengah && j % this._time === 0){
                    console.log(this._data_kue[i]._Nama_Kue+', menit ke '+String(j)+' : mentah')
                }else if(j > tengah && j < this._data_kue[i]._Lama_Dioven && j % this._time === 0){
                    console.log(this._data_kue[i]._Nama_Kue+', menit ke '+String(j)+' : hampir matang')
                }else if(j === this._data_kue[i]._Lama_Dioven && j % this._time === 0){
                    console.log(this._data_kue[i]._Nama_Kue+', menit ke '+String(j)+' : matang')
                }else if(j > this._data_kue[i]._Lama_Dioven && j % this._time === 0 ){
                    console.log(this._data_kue[i]._Nama_Kue+', menit ke '+String(j)+' : hangus')
                }
            }
        }

    }
    extractData(){
        let kueCoklat = new KueCoklat();
        let kueKacang = new KueKacang();
        let kueKeju = new KueKeju();
        let hasil = []
        hasil.push(kueCoklat);
        hasil.push(kueKacang);
        hasil.push(kueKeju);
        return hasil
    }
}
let ayoMasak = new AyoMasak(5,40);
ayoMasak._proses