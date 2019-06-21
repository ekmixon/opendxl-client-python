Search.setIndex({docnames:["advancedcliprovisioning","advancedeventsexample","advancedserviceexample","architecture","basiccliprovisioning","basiceventsexample","basicserviceexample","certcreation","dxlclient","dxlclient.broker","dxlclient.callbacks","dxlclient.client","dxlclient.client_config","dxlclient.exceptions","dxlclient.message","dxlclient.service","epobrokercertsexport","epobrokerlistexport","epocaimport","epoexternalcertissuance","features","index","installation","integrationtypes","marsearchexample","marsendauth","openconsoleprovisioning","overview","provisioningoverview","sampleconfig","servicewrapperexample","tiefilerepexample","topicauthgroupcreation","topicauthgrouprestrictions","topicauthoverview","updatingconfigfromcli"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:54},filenames:["advancedcliprovisioning.rst","advancedeventsexample.rst","advancedserviceexample.rst","architecture.rst","basiccliprovisioning.rst","basiceventsexample.rst","basicserviceexample.rst","certcreation.rst","dxlclient.rst","dxlclient.broker.rst","dxlclient.callbacks.rst","dxlclient.client.rst","dxlclient.client_config.rst","dxlclient.exceptions.rst","dxlclient.message.rst","dxlclient.service.rst","epobrokercertsexport.rst","epobrokerlistexport.rst","epocaimport.rst","epoexternalcertissuance.rst","features.rst","index.rst","installation.rst","integrationtypes.rst","marsearchexample.rst","marsendauth.rst","openconsoleprovisioning.rst","overview.rst","provisioningoverview.rst","sampleconfig.rst","servicewrapperexample.rst","tiefilerepexample.rst","topicauthgroupcreation.rst","topicauthgrouprestrictions.rst","topicauthoverview.rst","updatingconfigfromcli.rst"],objects:{"":{dxlclient:[8,0,0,"-"]},"dxlclient.broker":{Broker:[9,1,1,""]},"dxlclient.broker.Broker":{host_name:[9,2,1,""],ip_address:[9,2,1,""],parse:[9,3,1,""],port:[9,2,1,""],to_string:[9,4,1,""],unique_id:[9,2,1,""]},"dxlclient.callbacks":{EventCallback:[10,1,1,""],MessageCallback:[10,1,1,""],RequestCallback:[10,1,1,""],ResponseCallback:[10,1,1,""]},"dxlclient.callbacks.EventCallback":{on_event:[10,4,1,""]},"dxlclient.callbacks.RequestCallback":{on_request:[10,4,1,""]},"dxlclient.callbacks.ResponseCallback":{on_response:[10,4,1,""]},"dxlclient.client":{DxlClient:[11,1,1,""]},"dxlclient.client.DxlClient":{add_event_callback:[11,4,1,""],add_request_callback:[11,4,1,""],add_response_callback:[11,4,1,""],async_request:[11,4,1,""],config:[11,2,1,""],connect:[11,4,1,""],connected:[11,2,1,""],current_broker:[11,2,1,""],destroy:[11,4,1,""],disconnect:[11,4,1,""],register_service_async:[11,4,1,""],register_service_sync:[11,4,1,""],remove_event_callback:[11,4,1,""],remove_request_callback:[11,4,1,""],remove_response_callback:[11,4,1,""],send_event:[11,4,1,""],send_response:[11,4,1,""],subscribe:[11,4,1,""],subscriptions:[11,2,1,""],sync_request:[11,4,1,""],unregister_service_async:[11,4,1,""],unregister_service_sync:[11,4,1,""],unsubscribe:[11,4,1,""]},"dxlclient.client_config":{DxlClientConfig:[12,1,1,""]},"dxlclient.client_config.DxlClientConfig":{broker_ca_bundle:[12,2,1,""],brokers:[12,2,1,""],cert_file:[12,2,1,""],connect_retries:[12,2,1,""],create_dxl_config_from_file:[12,3,1,""],incoming_message_queue_size:[12,2,1,""],incoming_message_thread_pool_size:[12,2,1,""],keep_alive_interval:[12,2,1,""],private_key:[12,2,1,""],proxy_addr:[12,2,1,""],proxy_password:[12,2,1,""],proxy_port:[12,2,1,""],proxy_rdns:[12,2,1,""],proxy_type:[12,2,1,""],proxy_username:[12,2,1,""],reconnect_back_off_multiplier:[12,2,1,""],reconnect_delay:[12,2,1,""],reconnect_delay_max:[12,2,1,""],reconnect_delay_random:[12,2,1,""],reconnect_when_disconnected:[12,2,1,""],use_websockets:[12,2,1,""],websocket_brokers:[12,2,1,""],write:[12,4,1,""]},"dxlclient.exceptions":{BrokerListError:[13,5,1,""],DxlException:[13,5,1,""],InvalidProxyConfigurationError:[13,5,1,""],MalformedBrokerUriException:[13,5,1,""],NoBrokerSpecifiedError:[13,5,1,""],WaitTimeoutException:[13,5,1,""]},"dxlclient.message":{ErrorResponse:[14,1,1,""],Event:[14,1,1,""],Message:[14,1,1,""],Request:[14,1,1,""],Response:[14,1,1,""]},"dxlclient.message.ErrorResponse":{error_code:[14,2,1,""],error_message:[14,2,1,""],message_type:[14,2,1,""]},"dxlclient.message.Event":{message_type:[14,2,1,""]},"dxlclient.message.Message":{MESSAGE_TYPE_ERROR:[14,2,1,""],MESSAGE_TYPE_EVENT:[14,2,1,""],MESSAGE_TYPE_REQUEST:[14,2,1,""],MESSAGE_TYPE_RESPONSE:[14,2,1,""],MESSAGE_VERSION:[14,2,1,""],broker_ids:[14,2,1,""],client_ids:[14,2,1,""],destination_tenant_guids:[14,2,1,""],destination_topic:[14,2,1,""],message_id:[14,2,1,""],message_type:[14,2,1,""],other_fields:[14,2,1,""],payload:[14,2,1,""],source_broker_id:[14,2,1,""],source_client_id:[14,2,1,""],source_tenant_guid:[14,2,1,""],version:[14,2,1,""]},"dxlclient.message.Request":{message_type:[14,2,1,""],reply_to_topic:[14,2,1,""],service_id:[14,2,1,""]},"dxlclient.message.Response":{message_type:[14,2,1,""],request:[14,2,1,""],request_message_id:[14,2,1,""],service_id:[14,2,1,""]},"dxlclient.service":{ServiceRegistrationInfo:[15,1,1,""]},"dxlclient.service.ServiceRegistrationInfo":{add_topic:[15,4,1,""],add_topics:[15,4,1,""],destination_tenant_guids:[15,2,1,""],metadata:[15,2,1,""],service_id:[15,2,1,""],service_type:[15,2,1,""],topics:[15,2,1,""],ttl:[15,2,1,""]},dxlclient:{broker:[9,0,0,"-"],callbacks:[10,0,0,"-"],client:[11,0,0,"-"],client_config:[12,0,0,"-"],exceptions:[13,0,0,"-"],message:[14,0,0,"-"],service:[15,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","staticmethod","Python static method"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:staticmethod","4":"py:method","5":"py:exception"},terms:{"005056812aa3":30,"01d":30,"074b9f2bc1bf":7,"0c73":2,"0e7c1994":2,"0x10001":7,"11e6":30,"159d":30,"17f7":30,"19t18":24,"1b53cd6a":2,"1d79d1a9":1,"24397e4d":19,"284bca2e":30,"383105c5":30,"3e03":7,"41eae910":1,"41f3":1,"4a76":2,"4ae0":19,"4b40":30,"4e4b":1,"4f20":30,"4f2f":19,"57e02858e4b0217da8f65e80":24,"5b18f1cc":30,"5d73b77f":19,"645f":19,"6a89e2a79194":2,"722z":24,"79e1":30,"7ed17bf3f315":30,"88d9":30,"8a4d":7,"8c4b":19,"8efd":1,"94b54290a2cf":1,"974f":19,"9a0f":1,"9a8d7548c1b6":7,"9b2da534":7,"9ee95507":2,"break":[1,2],"byte":14,"case":[0,19,23,24,30],"class":[1,2,5,6,9,10,11,12,13,14,15,30],"default":[0,1,2,5,7,9,10,11,12,14,15,25,35],"export":19,"final":[2,6,19,24],"function":[1,2,11,23,24,31],"import":[10,11,12,15,19,20,22,33],"long":7,"new":[0,7,23,28,32],"return":[9,11,12,14,15,24,31],"short":27,"static":[9,12],"true":[11,12,24,30],"try":[1,2,30],"while":[5,19,24,30],Adding:1,CAs:[33,34],DNS:0,For:[0,4,7,11,12,15,18,20,23,28,32,34,35],Near:20,TLS:[0,3,20,35],The:[0,1,2,3,4,5,6,7,9,10,11,12,14,15,16,17,18,19,20,22,23,24,25,26,28,29,30,31,32,33,35],There:[7,9],These:[7,14,20,23],Use:22,__main__:[1,2,30],_baseobject:[9,10,11,12,15],a120dc59ede7:2,a628:2,a913:2,abc:14,abl:34,about:[7,11,24],abov:[0,7,10,11,15,16,17,18,24,25,32,33],accomplish:34,accur:27,across:3,action:[25,32,33],activ:[20,21,23,25,34],actual:[19,30],adac:30,adapt:27,add:[1,2,5,6,11,14,15,30,32],add_event_callback:[1,5,10,11],add_request_callback:11,add_response_callback:11,add_top:[2,6,15,30],added:[28,34],adding:11,addit:[4,14],address:[0,1,2,4,7,9,12,13,20,24,35],adjust:7,administr:[4,35],advanc:[4,20,21],ae3b:2,after:[11,19,28],against:[0,24,30,35],agent:20,agentguid:31,aggreg:24,all:[5,11,16,17,18,20,24,30,34],allow:[3,9,12,15,16,20,25,27,28,33],along:[0,2,15,24,35],also:[0,1,5,7,11,16,20,24,33],altern:[0,4,22],amount:[5,11],analysi:23,analyt:23,ani:[0,1,2,6,12,20,22,24,25,29,32,33],announc:23,anti:31,anyth:27,api:[8,13,23,24,25],api_kei:30,appear:[0,1,2,5,6,12,19,22,24,30,31],appid:30,applic:14,applicationerrorlist:24,appropri:[20,24,27,35],architectur:[7,21],argument:[0,4,11,12],artifact:0,ask:7,aspx:7,assembl:32,assign:[1,2],associ:[2,6,7,11,14,15,23,25,31,32,33],assum:[0,35],async_request:[2,10,11,14],asynchron:[2,10,11,14],atd:20,attempt:[0,11,12,16],attribut:[0,4,7,11,30,31],authent:[3,16,20,28],author:[0,4,7,20,24,28],automat:[10,11,15,22],avail:[0,7,11,12,14,15,16,23,24,28,31],avoid:35,b437:19,b610:2,b809:7,back:[2,6,11,12,23,30],bad:31,bar:[16,17,18,25,32,33],base64_from_hex:31,base:[0,3,7,9,10,11,12,13,14,15,19,20,23,30,33,34],basic:[0,1,2,21],bb90:30,bc2a:1,bd2a6171:7,bea5a34b9faa:1,becaus:20,becom:12,been:[5,10,11,23,24,31],befor:[11,12,30],behavior:11,being:[1,2,4,11,12,14,15,16,18,20,24,29,33],below:[2,7,11,18,24,30,31,32],benefit:20,between:[3,11,12,15,20,27],bin:7,bit:7,blank:7,block:[11,12,24],bodi:24,both:9,bottom:24,box:[25,33],brew:22,bridg:3,broken:[5,6],broker:[0,1,2,4,8,11,12,13,14,15,18,19,20,21,22,25,28,30,33,35],broker_ca_bundl:[11,12,16],broker_hostname_1:19,broker_hostname_2:19,broker_id:14,broker_id_1:19,broker_id_2:19,broker_ip_1:19,broker_ip_2:19,broker_port_1:19,broker_port_2:19,broker_url:9,broker_websocket_port_1:19,broker_websocket_port_2:19,brokercert:[11,12,16,19],brokercertchain:[12,19,35],brokerlist:[17,19],brokerlisterror:13,brokerswebsocket:[12,19,35],build:20,bundl:[0,4,12,26,35],bus:3,button:[16,17,18,25,32,33],c23d9c531ada:30,cabundl:19,cacreateseri:7,cafil:7,cakei:7,call:[4,7,11,12,28],callback:[1,2,5,6,8,11,14,15,21,30],callbacks_by_top:15,caller:[11,24,31],can:[0,3,4,7,11,12,13,14,15,16,17,18,19,20,22,23,25,28,30,32,33,34,35],cancel:7,catalogvers:24,caus:11,cert:[11,12,19,25,33,35],cert_fil:[7,11,12],certfil:[12,19],certif:[4,12,17,20,21,25,28,33,34,35],cfg:[7,12],challeng:7,chang:[7,12,20,34],check:[1,2,22,25,30,33],child:[25,33],chose:14,citi:[7,30],clean:11,clear:30,cli:[21,28,29],click:[16,17,18,25,32,33],client1:[0,4],client:[1,2,4,5,6,7,8,10,12,14,15,16,17,18,19,20,21,22,23,24,26,29,30,31,32,33,34],client_config:[7,8,9,11,16,17,21],client_id:14,close:30,closest:12,cloud:[20,30],cmd:7,cod:30,code:[1,2,5,6,7,14,24,30],collect:[14,23,27],com:[0,1,2,7,12,19],command:[1,2,7,21,23,28,29,30],common:[0,4,7,23],common_or_csrfile_nam:0,commun:[3,11,12,14,15,23,27],compani:7,compat:[22,28],complet:[1,2,5,6,15,18,19,24,25,29,30,31,33],compon:7,compris:23,comput:7,concaten:[0,35],concret:10,config:[0,1,2,4,11,12,19,29,30,35],configur:[0,1,2,5,6,7,11,12,16,17,19,21,24,26,30,31],confirm:11,conjunct:[11,14],connect:[0,1,2,3,4,7,9,11,12,14,16,17,18,26,28,30],connect_retri:[11,12],consol:[0,4,16,17,18,21,28,35],construct:[2,7,11,15,16],constructor:[9,10,11,12,14,15],contain:[0,1,2,4,6,9,11,12,14,15,24,26,28,30,31],content:[12,17,19,30],context:27,continu:[12,20],contrast:19,control:[11,12,23],conveni:24,convert:[24,31],coord:30,coordin:30,copi:17,corner:[16,17,18,25,32,33],correl:14,correspond:[2,9,11,12,14,23,24,31],could:[0,4,7,12,20,34],count:[5,24],countri:[0,7,30],creat:[1,2,5,6,7,9,10,11,12,15,18,19,23,24,30,31,32,33],create_dxl_config_from_fil:[7,9,12,16,17],create_search_top:24,created:31,created_at:24,createdat:24,creation:[12,18,19,21,24,33,34],credenti:[4,35],critic:7,crt:[0,4,7,11,12,16,18,19,35],csr:[4,7],current:[11,12,14,20,23,24,30],current_brok:11,current_weather_url:30,currentitemcount:24,currentweathercallback:30,custom:[0,35],dai:7,data:[3,11,12,13,14,23,30],dbversion:24,decis:27,decod:[1,2,5,6,15,24,30,31],def:[1,2,5,6,10,11,15,24,30,31],defens:20,defin:[2,7],deg:30,delai:[11,12],deleg:[23,30],deliv:[1,2,11,14,20,23,24,31],demilitar:20,demonstr:[5,6,10,11,15,30,31],depend:[7,12],deploi:22,desc:24,describ:[19,24,28],descript:30,design:27,destination_tenant_guid:[14,15],destination_top:[1,2,14],destroi:11,detail:[0,2,7,24],detect:23,determin:[14,20],develop:23,dict:14,dictionari:[14,15,24,31],did:[6,15,30],differ:[1,2,3,10,11,13,14,20],direct:[3,20],directli:[9,11],directori:[4,7,12,19,29,35],disconnect:[11,12],disk:0,displai:[0,1,2,4,7,24,30,35],distinct:[1,2],distinguish:7,distribut:23,dmz:20,document:[7,19,24],doe:[0,7,11,24,25],download:[7,28],due:11,dump:[24,30,31],dure:[0,7,19,24,35],dxl:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,22,23,24,25,28,29,30,31,32,34,35],dxl_client:[10,11,12,15],dxl_config_fil:12,dxlcert:19,dxlclient:[0,1,2,4,5,6,7,16,17,19,21,22,24,29,30,31,35],dxlclientconfig:[7,9,11,12,16,17],dxlexcept:13,dxlprivatekei:19,e2d6:7,e2eec9ebdf33:2,each:[0,1,2,3,7,11,12,15,24],easi:27,easili:23,edit:[16,17,18,25,32,33],effici:20,eicar:31,either:[11,20],elaps:5,elif:24,elimin:20,els:[2,24,30,31],email:[0,7],emailaddress:7,embed:20,enabl:[0,12,27],encod:[1,2,5,6,10,15,24,30,31],endpoint:[23,27],engin:0,ensur:[2,7,11,16,24,34],enter:[0,1,2,4,7,32,35],enterpris:20,entri:0,environ:[4,7,22,28,35],epo:[0,4,19,20,22,28,33,35],error:[2,6,14,15,24,30,31],error_cod:[14,24,30,31],error_messag:[2,14,24,30,31],errorrespons:[14,30],establish:[0,12,20,28,34],etc:[0,9,11,15,20,23,24,30,34],even:22,event:[2,10,11,14,20,21,23,30,34],event_callback:11,event_count:5,event_count_condit:5,event_exampl:5,event_id:5,event_publisher_sampl:1,event_subscriber_sampl:1,event_top:[1,5],eventcallback:[1,5,10,11],evt:10,examin:24,exampl:[0,4,10,11,12,15,18,20,23,28,29,30,32,34],exceed:[11,13],except:[8,11,21,24,30,31],exchang:[3,11,12,13,14,20,23,34],exe:[7,31],execut:[1,2,5,6,24,25,30,31],execute_mar_search_api:24,executedat:24,exhaust:11,exist:[11,12,23,30],exit:11,expect:[1,2],expectedhostrespons:24,expens:20,explicitli:15,expos:[15,20,23,30,32],extens:[4,7,16,17,18,22,28,35],extern:[21,28],extra:7,extract:[1,2,6,15,24,30],extrem:20,f98c55bdddf7:19,fabric:[0,1,2,4,5,6,7,9,11,12,14,15,16,17,18,19,20,23,24,27,28,30,31,34],fact:11,failur:24,fals:[11,12,24],familyid:7,fashion:15,fault:15,featur:[14,21],febd12facfd4:19,few:7,field:[7,14],file:[0,4,12,16,17,18,19,20,21,26,29,30,35],file_path:12,file_rep_sampl:31,file_rep_top:31,fill:7,filter:[11,24],find:24,finish:24,firewal:20,first:[1,2,5,6,24,30,31],flag:12,flow:23,folder:22,follow:[0,1,2,4,5,6,7,10,11,12,15,16,17,18,19,22,24,25,28,29,30,31,32,33,35],forens:23,forev:30,form:[9,14],format:[0,9,12,30,35],foundat:27,fqdn:7,framework:27,friendli:20,from:[1,2,5,6,7,10,11,12,14,15,19,20,23,24,28,30,35],full:[7,12],gener:[4,7,12,13,15,19,26,28],generatecsr:0,genrsa:7,geograph:[3,30],get:[7,12,24],get_tie_file_reput:31,global:31,going:[7,24],good:31,greater:22,grnd_level:30,group:[21,25,34],gti:31,guid:[16,17,18],handl:[1,2,14,24],has:[0,10,11,12,23,24,31,34],hash:31,have:[1,2,4,5,6,7,11,12,16,17,18,20,22,24,28,30,33,35],header:14,here:4,hex:31,hide:24,higher:22,hillsboro:[0,7],hold:12,host:[0,1,2,4,9,24,30,35],host_nam:9,hostinfo:24,hostnam:[9,20,35],hour:11,how:[5,6,10,11,19,24,28,30,34],html:7,http:[7,12,13,30],humid:30,icon:30,identifi:[9,14,15,24,31,34],imag:[16,17,18,25,32,33],immedi:[0,11],implement:10,inabl:14,includ:[0,2,9,11,12,15,19,20,22,23,24,25,26,28,30,34],incom:[1,6,12,14,30],incoming_message_queue_s:12,incoming_message_thread_pool_s:12,incorpor:7,increas:[11,12,15],increment:5,indent:[24,30],indic:[1,2,7,11,12,14,23,24,25,31,33],individu:[20,27],info:[0,1,2,4,6,15,30,35],inform:[1,2,4,6,7,10,11,12,14,15,16,17,18,19,20,23,24,25,26,27,28,30,33,34,35],initi:[11,12,14,23,28],insert:0,inspect:15,instal:[4,7,24,28,29,35],instanc:[1,2,6,7,9,10,11,14,15,16,17,30],instanti:[7,12,16,17],instead:11,integr:21,intel:7,intellig:[20,21,23,32,34],interact:23,interconnect:27,interest:20,interfac:[0,4,10,21,28,29,35],intern:[14,19],internet:7,interpret:0,interv:15,invalid:[13,24],invalidproxyconfigurationerror:13,invoc:[10,23],invok:[6,9,10,11,12,14,15,20,23,31,32,34],ip_address:[9,24],isecg:[1,2,7],item:24,itemsperpag:24,its:[2,20,23,25,28,30],itsasecret:0,itself:[14,24],john:7,json:[24,30,31],keep_alive_interv:12,kei:[4,7,11,12,19],keyout:7,know:20,known:[14,23,31],lat:30,later:[0,22],latest:[22,35],launch:[1,2,30],layer:[3,11,12,13,14],leav:[1,2,7,30],left:[7,16,17,18,25,32,33],letter:7,level:[20,31],leverag:23,lib:22,light:7,like:14,limit:[11,12,14,15,24,33,34],line:[21,28,29],linux:22,list:[1,2,7,12,13,18,19,30],listen:[5,23],load:[0,1,2,12,24,30,31],local:[0,7,16,17,24,35],locat:[3,7,14,19,22,29,30],log:[9,23],logger:[1,2,30],lon:30,london:30,longer:27,look:19,loop:[1,2,5,24,30],lower:[16,17,18,25,32,33],ltd:7,mac:22,made:[4,11,12,14,28],mai:[0,12,14,16,17,18,24,28],main:[5,6,11,30],major:[24,30,31],make:[1,2,5,6,27,30],malform:13,malformedbrokeruriexcept:13,malwar:23,manag:[0,4,19,20,21,22,27,28,32,34,35],mani:[14,20,23],mar:[21,22,34],masquerad:34,maximum:[11,12],mcafe:[0,1,2,12,19,20,21,23,25,30,31,32,34],md5:31,md5_hex:31,mean:20,messag:[1,2,3,5,6,7,8,9,10,11,12,15,20,21,23,24,25,27,30,31,33,34],message_id:[2,14],message_typ:[2,6,14,15,24,30,31],message_type_error:[2,6,14,15,24,30,31],message_type_ev:14,message_type_request:14,message_type_respons:14,message_vers:14,messagecallback:10,meta:[15,24],metadata:15,method:[1,2,5,6,7,9,10,11,12,14,15,16,17,23,24,30,31],microsoft:7,middlewar:3,minut:[12,15,18,25,33],miss:7,mkdir:7,mobil:[20,27],mode:23,model:23,modif:14,modifi:25,modul:[21,22],modulu:7,more:[0,7,10,11,14,16,17,19,23,24,25,26,32,35],mqtt:12,multipl:[11,12,15,23],multipli:[11,12],must:[0,1,2,4,7,10,11,16,18,22,24,25,28,29,30,33,35],mutual:[16,20],myagent:31,mybrok:[1,2,9,12,19],mybroker2:[12,19],mycompani:[2,15],myeventcallback:[1,5,10,11],myorg:0,mypass:[4,35],myrequestcallback:[2,6,15],myresponsecallback:[2,10],myserv:[0,4,35],myservic:[2,6,15],myuser:[4,35],name:[0,1,2,4,7,9,12,15,24,30,32,35],nativ:23,navig:[16,17,18,25,32,33],necessari:[4,7,12,26],need:[17,28,32],negoti:[0,35],net:0,network:27,never:20,newclient:12,newer:[4,21,28,35],newli:24,next:[1,2,11,12,24,25,30,33],nobrokerspecifiederror:13,non:4,none:[9,11,12,22,30],normal:[16,17,18],note:[0,4,7,10,11,14,19,20,28,29,35],notepad:31,notifi:5,notify_al:5,now:20,number:[5,11,12],numer:14,object:[2,6,9,11,12,15,24,30,31],obtain:[24,30],occur:[6,7,11,14,15,20,24,30],off:[11,12],offset:24,older:[16,17,18],omit:9,on_ev:[1,5,10,11],on_request:[2,6,10,15,30],on_respons:[2,10],onc:[5,11,23,24,30],one:[0,7,12,14,15,20,22,23,24,27,32,35],ones:20,onli:[0,12,16,17,18,20,25,33,34],onto:15,open:[7,19,22],opendxl:[0,4,19,21,28,35],openssl:[7,22],openssl_bin:7,openssl_conf:7,openssl_vers:22,openweather_common:30,openweather_service_invok:30,openweather_service_wrapp:30,openweathermap:30,oper:[0,4,27,29,32,35],option:[4,7,9,11,16,17,18],orchestr:23,order:[25,28],oregon:[0,7],org:30,organ:[0,7],organiz:[0,7],origin:[11,12,14],osx:22,other:[0,3,11,12,20,23,25,27,34],other_field:14,otherwis:14,our:2,out:7,outlin:[18,33],output:[0,1,2,4,5,6,7,22,24,29,30,31,35],outsid:[7,19],over:[3,11,12,14,20,23,25],overridden:15,overview:[21,25,29],packag:[7,21,22,28],page:[0,19,24,26,28],pair:[7,15,19],param:[24,31],paramet:[4,7,9,10,11,12,14,15,16,24],pars:[9,11,12],part:[4,15,23],parti:[16,17,18,20,22],particular:[15,19,20,23,24,30,32,34],pass:[0,7,9],passiv:[20,23],passphras:0,password:[4,7,12,35],path:[7,12,19],pattern:11,payload:[1,2,5,6,10,14,15,24,30,31],payload_dict:[24,31],pem:[0,7,12,35],percentag:[11,12],perform:[0,21,24,28,29,30,34,35],period:[12,20,23,28],perman:7,phrase:[0,7],piec:23,ping:[6,12,15],pip:22,pki:[3,12,18,19,20],place:[7,24],platform:7,pleas:[7,18,25,33,34],point:[7,19,20],poll:24,pong:[6,15],pool:12,popul:[6,10,15,19,29,30],port:[0,1,2,4,9,12,13,30,35],possibl:[19,22],post:24,prefer:[11,22],presenc:23,preserv:12,press:2,pressur:30,prevent:11,previous:[2,5,18,20,35],primari:23,print:[5,6,10,11,15,24,30],prior:[1,2,5,6,18,24,29,30,33],privat:[4,7,12,19],private_kei:[7,11,12],privatekei:[12,19],proce:[16,17,18],process:[4,7,16,17,18,19,23,24,25,28,33],product:[7,15,20,23,27],project:24,prompt:[0,1,2,4,7,30,35],prop:31,propag:[18,25,33],properli:[1,2,9,11],properti:[17,19],protect:[7,34],provid:[0,4,11,15,24,31,34,35],providerid:31,provinc:[0,7],provis:[7,29,35],provisionconfig:[0,4],proxi:[12,13],proxy_addr:12,proxy_arg:12,proxy_password:12,proxy_port:12,proxy_rdn:12,proxy_typ:12,proxy_usernam:12,pty:7,publish:[2,3,14,20,23],purpos:[3,9,11,23],put:24,py2:22,py3:22,python:[1,2,4,5,6,7,11,19,24,28,29,30,31,34],queri:[23,24,30,31,34],queue:12,quit:[1,2,7,11],rais:[11,13,24,31],random:[11,12],rang:5,rare:11,rate:12,rather:0,rdn:12,reach:[20,24],reaction:23,read:30,real:[3,20,23,27],realiti:27,receiv:[0,1,2,5,6,10,11,14,15,20,23,24,30,31,33,34],recipi:14,reconnect:[11,12],reconnect_back_off_multipli:[11,12],reconnect_delai:[11,12],reconnect_delay_max:[11,12],reconnect_delay_random:[11,12],reconnect_when_disconnect:12,record:5,redistribut:7,redund:3,refer:[0,20],referenc:35,regard:[0,28],regist:[1,2,5,6,10,11,15,20,23,30],register_service_async:11,register_service_sync:[2,6,11,15,30],registr:[2,6,11,15,30],registri:15,relat:[0,13,19,24,32,34],releas:11,remain:[1,2,30],remedi:23,rememb:7,remot:[4,11,14,15,28],remov:[11,28],remove_event_callback:11,remove_request_callback:11,remove_response_callback:11,repchang:20,repeat:7,replac:30,repli:23,reply_to_top:14,report:20,repres:[9,12],represent:9,reput:[20,21,34],req:[6,7,15,24,30,31],request:[2,6,7,10,11,14,15,20,23,24,30,31],request_callback:11,request_message_id:[2,14],requestcallback:[2,6,10,11,15,30],requir:[7,9,12,14,21,22,28,31,33],res:[6,15,24,30,31],resid:[24,31,35],resourc:11,resp_dict:24,respond:[2,6,15,20,30],respons:[2,3,5,6,10,11,14,15,20,21,23,25,30,31,34],response_callback:11,response_dict:[24,30],responsecallback:[2,10,11,14],rest:[15,16,17,18,23,24,30],restrict:[20,21,25,32,34],result:[1,2,4,11,12,24,30,31],retri:[11,12],retriev:[31,35],right:[16,17,18,25,32,33],robin:[14,15],role:23,round:[14,15],rout:[3,14,15],row:32,rsa:7,run:[1,2,5,6,7,19,22,23,24,29,30,31],same:[1,7,11,15,20,24],sampl:[12,19,25],save:[0,4,16,17,18,25,32,33],scalabl:[3,15,27],scenario:14,scope:[7,19],script:[1,2,5,6,22,24,30,31],sdk:[1,2,5,6,19,23,24,29,30,31],sea_level:30,search:[21,34],search_exampl:24,search_id:24,second:[2,5,6,11,12,15,30,31],section:[0,4,5,6,7,16,17,18,19,28,32,33,34,35],secur:23,see:[0,4,7,10,11,16,17,18,19,24,25,26,30,32,34],select:[7,14,15,16,17,18,25,32,33],self:[1,2,5,6,10,11,15,30],send:[0,2,5,6,10,11,12,14,15,20,23,24,25,30,31,33,34],send_ev:[1,5,10,11,14],send_respons:[2,6,11,14,15,30],sent:[2,7,11,14,15,20,23,24,30],separ:[1,2,24,25,27,30],seri:22,server:[0,4,7,16,17,18,20,25,28,32,33,35],servertim:31,servic:[8,10,11,14,20,21,23,24,25,27,31,32,34],service_current_weather_top:30,service_exampl:6,service_id:[10,14,15],service_invoker_sampl:2,service_nam:30,service_provider_sampl:2,service_reg_info:11,service_registration_info:2,service_req_info:11,service_top:[2,6],service_typ:15,serviceregistrationinfo:[2,6,10,11,15,30],servicewrapp:30,session:[0,35],set:[5,7,11,12,14,15,16,17,18,23,24,25,30,31,32,33,35],setup:[7,22],sever:[9,11,18,25,33],sha1:31,sha1_hex:31,sha:31,share:27,shell:[1,2,22,30],sherwood:30,should:[0,1,2,4,5,6,7,11,12,14,19,22,24,30,31,34,35],show:[0,12],shown:[11,16,17,18,24,25,30,31,32,33],side:20,sign:[4,7,18,19,28,33,34],signatur:7,silo:27,similar:[0,1,2,4,5,6,7,15,19,22,24,30,31,35],simpl:[10,11,24,30],simpli:14,simplifi:32,sinc:20,singl:[0,15,16,17,18,20,34,35],size:12,sky:30,sleep:[24,30],slproweb:7,sole:20,solut:27,some:[7,14],sort:24,sort_kei:[24,30],sortbi:24,sortdirect:24,source_broker_id:14,source_client_id:[10,11,14],source_tenant_guid:14,specif:[1,2,5,6,14,23,34],specifi:[0,4,7,9,11,12,13,14,16,24,25,29,35],speed:30,ssl:[7,9,11,12,22],standard:[4,12,31],start:[1,2,5,7,24,30],startindex:24,starttim:24,state:[0,7],statement:[11,22],station:30,statu:24,step:[0,1,2,5,6,7,16,17,18,19,24,25,30,31,32,33],still:22,store:[0,4,35],str:[2,5,24,30,31],string:[1,2,9,24,31],style:20,sub:[19,29],subject:[0,4,7],submitmetadata:31,subscrib:[2,3,5,10,11,14,20,23,30],subscribe_to_top:11,subscribedhost:24,subscript:11,subsequ:[11,12,24],success:[4,24,35],successfulli:20,sunris:30,sunset:30,suppli:[0,35],support:[4,11,12,20,22,23,24],sure:[1,2,5,6,30],sync_request:[2,6,11,14,15,24,30,31],synchron:[2,6,15,24,27,30,31],sys:30,system:[23,25,27],tag:25,take:[7,18,25,33],target:[23,24],tcp:12,team:0,technic:19,temp:30,temp_max:30,temp_min:30,tempor:24,tenant:[14,15],term:20,test:[10,31],testeventtop:[10,11],testrequesttop:[10,15],testservic:[10,15],text:30,textual:[14,15],than:[0,25,32],theclient:0,thei:[11,20],them:5,therefor:20,thi:[0,1,2,5,6,7,9,10,11,12,14,15,16,17,18,19,20,24,25,28,30,31,32,33,34,35],third:[16,17,18,22],those:[0,7,23],thought:[11,15],thread:12,threat:[20,21,23,32,34],through:[7,16,17,19,25,27,32,33],throughout:24,tie:[20,21,23,32,34],time:[0,3,5,11,20,23,24,27,30],timeout:[2,11,13,24],titl:[16,17,18],tlsv1:22,to_str:9,togeth:[0,35],toler:15,topic:[1,2,5,6,10,11,14,15,20,23,24,25,30,31,32,33,34],total_ev:5,totalitem:24,trail:0,transmit:14,treat:27,trigger:23,trust:31,trustlevel:31,truststor:[0,35],ttl:[15,24],tupl:[11,15],turn:[11,14],two:[1,2,5,6,20,23,31],type:[0,11,12,14,21,22,30,31],typic:[10,11,14,15,20],unabl:24,unchang:12,under:[0,35],unfortun:22,uniqu:[1,2,9,14,15,30],unique_broker_id_1:19,unique_broker_id_2:19,unique_id:9,unit:[0,7],unless:15,unpack:22,unreach:20,unregist:11,unregister_service_async:11,unregister_service_sync:11,unregistr:11,unrestrict:32,unsubscrib:11,unsubscribe_from_top:11,until:[1,2,5,11,12,24],updat:[19,21],updateconfig:35,upon:14,url:[9,13,30],urlopen:30,urlrequest:30,usag:[0,4,11],use:[0,7,11,12,14,17,22,23,27,28,29],use_websocket:12,used:[0,1,2,4,7,9,10,11,12,14,15,16,17,18,22,24,25,26,28,33,34,35],user:[4,23,35],usernam:[4,12,35],uses:19,usewebsocketbrok:12,using:[10,11,14,16,17,18,19,28,34],utf:[1,2,24,30,31],util:[23,24,25,34],uuid:14,v3_ca:7,valid:[0,2,7,9,16,24,35],valu:[1,2,4,7,11,12,14,15,19,24,31],variabl:7,variou:[7,23],verbos:7,veri:[1,2,7],verifi:7,version:[4,14,15,16,17,18,20,22,28,35],via:[0,1,2,4,5,6,7,9,10,11,14,16,20,21,23,24,28,30,31],viru:31,visual:7,vulner:23,wai:[0,9,11,22],wait:[1,2,5,6,11,13,15,24,30,31],waittimeoutexcept:13,wakeup:20,walk:[7,16,17,19,25,32,33],want:20,weather:30,weather_respons:30,web:[0,15,35],websocket:12,websocket_brok:12,well:28,were:[19,20,34],what:[1,2,7],when:[0,1,2,4,7,9,10,11,12,13,14,15,16,19,20,30,34,35],where:[0,14],wherea:34,wherein:20,whether:[11,12],which:[0,2,4,9,11,12,14,15,20,25,28,30,33,34,35],whl:22,who:11,widgit:7,win32:7,win32openssl:7,win64:7,wind:30,window:22,wish:22,within:[14,22,24],without:[0,12,14,20,22,34],work:[23,25],workaround:22,workflow:0,world:20,would:[10,11,12,20],wrap:[23,30],wrapper:[21,23],write:[7,12],www:7,x509:7,x64:7,x86:7,you:[1,2,5,6,7,18,19,22,29,30,33],your:7,zip:[22,30],zone:20},titles:["Command Line Provisioning (Advanced)","Advanced Events Sample","Advanced Service Sample","Architecture","Command Line Provisioning (Basic)","Basic Events Sample","Basic Service Sample","Certificate Files Creation (PKI)","dxlclient package","dxlclient.broker module","dxlclient.callbacks module","dxlclient.client module","dxlclient.client_config module","dxlclient.exceptions module","dxlclient.message module","dxlclient.service module","ePO Broker Certificates Export","ePO Broker List Export","ePO Certificate Authority (CA) Import","External Certificate Authority (CA) Provisioning","Features","Data Exchange Layer (DXL) Python SDK Documentation","Python SDK Installation","Integration Types","McAfee Active Response (MAR) Search Sample","Authorize Client to Perform MAR Search","OpenDXL Broker Management Console Provisioning","Data Exchange Layer (DXL) Overview","Provisioning Overview","Samples Configuration","Service Wrapper Sample","Threat Intelligence Exchange (TIE) File Reputation Sample","Authorization Group Creation","Managing Authorization Group Restrictions","Authorization Overview","Client Configuration Update via Command Line"],titleterms:{"export":[16,17],"import":18,The:27,activ:24,addit:[0,35],advanc:[0,1,2],api:[21,30],architectur:3,author:[18,19,21,25,32,33,34],basic:[4,5,6,35],broker:[3,9,16,17,26],callback:10,certif:[0,7,16,18,19],client:[0,3,11,25,28,35],client_config:12,command:[0,4,35],commun:20,configur:[28,29,35],connect:[20,27],consol:26,consum:23,content:8,creation:[7,32],csr:0,data:[21,27],document:21,dxl:[21,27],dxlclient:[8,9,10,11,12,13,14,15],encrypt:0,epo:[16,17,18],event:[1,5],exampl:35,except:13,exchang:[21,27,31],extern:19,featur:20,file:[7,31],from:0,gener:0,group:[32,33],inform:0,instal:[21,22],integr:23,intellig:31,introduct:21,invok:[2,30],kei:[0,30],layer:[21,27],line:[0,4,35],linux:7,list:17,locat:20,manag:[26,33],mar:[24,25],mcafe:24,messag:14,model:20,modul:[8,9,10,11,12,13,14,15],multipl:20,opendxl:26,openweath:30,option:[0,28,35],overview:[27,28,34],packag:8,perform:25,persist:20,pki:7,prerequisit:[22,24,31],privat:0,provid:[2,23],provis:[0,4,19,21,26,28],publish:1,python:[21,22],reput:31,request:0,respons:24,restrict:33,sampl:[1,2,5,6,21,24,29,30,31],sdk:[21,22],search:[24,25],secur:[20,27],separ:0,servic:[2,6,15,30],sign:0,submodul:8,subpackag:8,subscrib:1,threat:31,tie:31,type:23,unawar:20,updat:[28,35],via:35,vision:27,what:27,window:7,wrapper:30}})