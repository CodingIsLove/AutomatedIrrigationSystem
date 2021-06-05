
let blabla = function (){
    alert("Fuck this is working as expected")
}

let getAvailability = async function (){
    let result = await navigator.bluetooth.getAvailability()
    alert(result)
}

let getBluetoothDevices = function(){
   navigator.bluetooth.requestDevice({
       acceptAllDevices:true
   })
       .then((bluetoothDevice) => {
           console.log(bluetoothDevice.uuid)
       })
}
