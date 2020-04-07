// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        var cur_date = new Date();
        var hours = cur_date.getHours();
        var minutes = cur_date.getMinutes();
        var seconds = cur_date.getSeconds();
        document.getElementById("demo").innerHTML = 'Часът е ' + hours + ':' + minutes + ':' + seconds;

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = dd + '/' + mm + '/' + yyyy;
        document.getElementById("demo1").innerHTML = 'Датата е ' + today;
        document.getElementById("b1").addEventListener("click", test);
        document.getElementById("b2").addEventListener("click", test2);
        document.getElementById("b3").addEventListener("click", test3);
        document.getElementById("b4").addEventListener("click", test4);
        document.getElementById("b5").addEventListener("click", test5);
    };

    function test() {
        window.addEventListener("batterystatus", onBatteryStatus, false);
    }

    function onBatteryStatus(info)
    {
        if (info.level < 20 && !info.isPlugged) {
            alert("Ниво на батерията: " + info.level + "% " + '\n' + "Включено зарядно: " + info.isPlugged + '\n' + "Слаба батерия, моля поставете зарядно!");
        } else if (info.level > 20 || info.isPlugged) {
            alert("Ниво на батерията: " + info.level + "% " + '\n' + "Включено зарядно: " + info.isPlugged);
        }
            
    }

    function test2() {
        alert("Версия Cordova: " + device.cordova + '\n' + "UUID: " + device.uuid + '\n' + "Платформа: " + device.platform
            + '\n' + "Версия: " + device.version + '\n' + "Производител: " + device.manufacturer + '\n' + "Модел: " + device.model
            + '\n' + "Виртуално устройство: " + device.isVirtual + '\n' + "Сериен номер: " + device.serial);
    }

    function getConnectionInfo() {
        if (typeof (Connection) == "undefined" || typeof (navigator.connection) == "undefined") {
            return "Plugin not installed";
        }

        var networkState = navigator.connection.type;
        var states = {};

        states[Connection.UNKNOWN] = 'Неразпозната връзка';
        states[Connection.ETHERNET] = 'Ethernet';
        states[Connection.WIFI] = 'WiFi';
        states[Connection.CELL_2G] = '2G';
        states[Connection.CELL_3G] = '3G';
        states[Connection.CELL_4G] = '4G';
        states[Connection.CELL] = 'Обикновена връзка';
        states[Connection.NONE] = 'Няма интернет връзка';

        return states[networkState];
    }

    function test3() {
        alert("Интернет свързаност: " + getConnectionInfo());
    }

    function test4() {
        alert('Ориентацията на устройството: ' + screen.orientation.type);
    }

    function test5() {
        var options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 20000
        }
        var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

        function onSuccess(position) {
            alert('Географска ширина: ' + position.coords.latitude + '\n' +
                'Географска дължина: ' + position.coords.longitude + '\n' +
                'Надморска височина: ' + position.coords.altitude + '\n' +
                'Точност: ' + position.coords.accuracy + '\n' +
                'Точност на височината: ' + position.coords.altitudeAccuracy + '\n' +
                'Посока: ' + position.coords.heading + '\n' +
                'Скорост: ' + position.coords.speed + '\n' +
                'Настояща дата и време: ' + new Date(position.timestamp) + '\n');
        };

        function onError(error) {
            alert('Код: ' + error.code + '\n' + 'Съобщение: ' + error.message + '\n');
        }
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();