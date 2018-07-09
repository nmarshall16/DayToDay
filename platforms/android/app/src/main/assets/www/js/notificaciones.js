//Para inicializar las funciones de mensajería (notificaciones)
document.addEventListener('deviceready', function () {

  //Al recibir la notificación (con aplicación abierta)
  window.plugins.OneSignal
  	.startInit("6a1e3ec9-5164-4876-8c93-7adcbabfdc70")
  	.handleNotificationReceived(function(jsonData) {
    	//alert("Notification received:\n" + JSON.stringify(jsonData));
    	//Si es agregar actividades diarias va al if, y si es de invitación va al else
    	if(!jsonData['payload']['additionalData']['noti']=="inv"){
    		location.href ="actividades.html";
    	}else{
    		location.href ="evento.html?inv="+jsonData['payload']['additionalData']['even'];
    	}
  	})
  	.endInit();

  	window.plugins.OneSignal
	  .startInit( "6a1e3ec9-5164-4876-8c93-7adcbabfdc70")
	  .handleNotificationOpened(function(jsonData) {
	    if(!jsonData['payload']['additionalData']['noti']=="inv"){
    		location.href ="actividades.html";
    	}else{
    		location.href ="evento.html?inv="+jsonData['payload']['additionalData']['even'];
    	}  
	  })
	  .endInit();
}, false);