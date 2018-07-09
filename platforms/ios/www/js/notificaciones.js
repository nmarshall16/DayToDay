//Para inicializar las funciones de mensajería (notificaciones)
document.addEventListener('deviceready', function () {

  //Al recibir la notificación (con aplicación abierta)
  window.plugins.OneSignal
  	.startInit("6a1e3ec9-5164-4876-8c93-7adcbabfdc70")
  	.handleNotificationReceived(function(jsonData) {
    	//alert("Notification received:\n" + JSON.stringify(jsonData));
    	//Si es agregar actividades diarias va al if, y si es de invitación va al else
    	if(!jsonData['payload']['additionalData']['noti']=="inv"){
    		alert("actividadcita");
    		location.href ="actividades.html";
    	}else{
    		alert("Invitacioncita");
    		location.href ="evento.html?inv="+jsonData['payload']['additionalData']['even'];
    	}
  	})
  	.endInit();

  	window.plugins.OneSignal
	  .startInit( "6a1e3ec9-5164-4876-8c93-7adcbabfdc70")
	  .handleNotificationOpened(function(jsonData) {
	    //alert("Notification opened:\n" + JSON.stringify(jsonData));
	    //console.log('didOpenRemoteNotificationCallBack: ' + JSON.stringify(jsonData)); 
	    if(!jsonData['payload']['additionalData']['noti']=="inv"){
    		alert("actividadcita");
    		location.href ="actividades.html";
    	}else{
    		alert("Invitacioncita");
    		location.href ="evento.html?inv="+jsonData['payload']['additionalData']['even'];
    	}  
	  })
	  .endInit();
}, false);

/*Código para evento
//cargador de evento
    var cargarEvento=function(porpEx){
      fn.load("verEventos.html");
        //alert("hola");
        $.ajax({
          url: 'http://209.222.103.210/~prestash/evento.php',
          type: 'post',
          data: {
            'metodo': 'verEvento',
           'evento_id': porpEx,
          },
          crossDomain: true,
          cache: false,                                        
          beforeSend: function() {
          },
          success: function(data) {
            console.log(data);
            // Con esta consulta se valida que no haya habido ningun problema con la consulta  
            if(!data['errores']['error']) {
              // Aqui hay un ejemplo de como mostrar los datos
              //$("#result").html(""); 
              data['evento'].forEach(function(evento) {
              //$("#result").append("<li>"+evento['nombre']+"</li>"); 
              $("#NameEvento").val(evento['nombre']);
              $("#ubiEvento").val(evento['ubicacion']);
              $("#fechEvento").val(evento['fecha']);

              }); 
                $("#fieldUser").empty();
              data['participantes'].forEach(function(part) {
                if (part['nombre']=="nombre_ingresado") {

                }else{
                  $("#fieldUser").append("<ons-row><ons-col><ons-icon icon='md-account' size='20px'></ons-icon></ons-col><ons-col><ons-icon style='color: #24e240;' icon='md-check' size='20px'></ons-icon><ons-icon style='color: #ED1919;' icon='md-close' size='20px'></ons-icon></ons-col><ons-col><label style='font-size: 10px;'>"+part['nombre']+"</label></ons-col></ons-row>");
                }
              //$("#result").append("<li>"+evento['nombre']+"</li>"); 
              });

            }else{
              // Aqui podran ver el error que se genero
              console.log(data['errores']['description']);
            }
          },
          error:function(jqXHR,text_status,strError){ 
            console.log(jqXHR);
          }
        });
    }

    //Para enviar notificación
    var enviarInvitaciones=function(eventid){
      window.plugins.OneSignal.getIds(function() {
        var notificationObj = { contents: {en: "Prueba de envio",title: "Envio","additionalData":{"noti":"inv","even":eventid}}};
        window.plugins.OneSignal.postNotification(notificationObj,
          function(successResponse) {
            alert("Notification Post Success:", successResponse);
          },
          function (failedResponse) {
            console.log("Notification Post Failed: ", failedResponse);
            alert("Notification Post Failed:\n" + JSON.stringify(failedResponse));
          }
        );
      });
    }

    //Para obtener los datos de la url:
    //**********************************************************************************************************
    function getGET()
    {
        var loc = document.location.href;
        if(loc.indexOf('?')>0)
        {
            var getString = loc.split('?')[1];
            var GET = getString.split('&');
            var get = {};

            for(var i = 0, l = GET.length; i < l; i++){
                var tmp = GET[i].split('=');
                get[tmp[0]] = unescape(decodeURI(tmp[1]));
            }
            return get;
        }
    }
 
    window.onload = function(){
        var valores=getGET();
        if(valores){
            for(var index in valores){
              cargarEvento(valores[index]);
                //alert("clave: "+index+" - valor: "+valores[index]);
            }
        }
    }//****************************************************************************************

    enviarInvitaciones("2");

	$(document).on("click",".EventoUno",function(){
        var porpEx = $(this).attr("indexAtr");
   		cargarEvento(porpEx);
    });
*/