webpackJsonp([1],{Kmg7:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("7+uW"),n=a("kxiW"),r=a.n(n),s={name:"navbar",data:function(){return{isLoggedIn:!1,currentUser:!1}},created:function(){r.a.auth().currentUser&&(this.isLoggedIn=!0,this.currentUser=r.a.auth().currentUser.email)},methods:{logout:function(){var t=this;r.a.auth().signOut().then(function(){t.$router.push("/login")})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("div",{staticClass:"nav-wrapper indigo col s12"},[a("div",{staticClass:"container col s12"},[a("ul",{staticClass:"left"},[t.isLoggedIn?a("li",[a("span",{staticClass:"email white-text col s2 things"},[t._v(t._s(t.currentUser))])]):t._e()]),t._v(" "),a("router-link",{staticClass:"brand-logo center col s5",attrs:{to:"/"}},[t._v("Pharma Manager")]),t._v(" "),a("ul",{staticClass:"right"},[t.isLoggedIn?t._e():a("li",{staticClass:"col s1"},[a("router-link",{staticClass:"things",attrs:{to:"/login"}},[t._v("Login")])],1),t._v(" "),t.isLoggedIn?t._e():a("li",{staticClass:"col s1"},[a("router-link",{staticClass:"things",attrs:{to:"/register"}},[t._v("Register")])],1),t._v(" "),t.isLoggedIn?a("li",{staticClass:"col s1"},[a("router-link",{staticClass:"things",attrs:{to:"/"}},[t._v("List")])],1):t._e(),t._v(" "),t.isLoggedIn?a("li",{staticClass:"col s2"},[a("button",{staticClass:"btn indigo lighten-3 btn-small things",on:{click:t.logout}},[t._v("Logout")])]):t._e()])],1)])])},staticRenderFns:[]};var u={name:"App",components:{Navbar:a("VU/8")(s,d,!1,function(t){a("Kmg7")},"data-v-1e3ff83f",null).exports}},g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1)],1)},staticRenderFns:[]},o=a("VU/8")(u,g,!1,null,null,null).exports,l=a("/ocq"),m=a("yviF"),_=a.n(m),c=(a("881v"),_.a.initializeApp({apiKey:"AIzaSyCknp5IZYa2aG0rz8m9wHcOc1JJ1JXQpY0",authDomain:"pharma-v2.firebaseapp.com",databaseURL:"https://pharma-v2.firebaseio.com",projectId:"pharma-v2",storageBucket:"pharma-v2.appspot.com",messagingSenderId:"812141324720",appId:"1:812141324720:web:7a265d710dc13ef1c08e75"}).firestore()),p={name:"pagination",props:["patients","currentPage","pageSize"],methods:{updatePage:function(t){this.$emit("page:update",t)},totalPages:function(){return Math.ceil(this.patients.length/this.pageSize)},showPreviousPage:function(){return 0!==this.currentPage},showNextPage:function(){return this.currentPage!==this.totalPages()-1}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.totalPages()>0?a("div",{staticClass:"pagination-wrapper"},[t.showPreviousPage()?a("span",{staticClass:"pagination-btn",on:{click:function(e){return t.updatePage(t.currentPage-1)}}},[t._v("\n    <\n    ")]):t._e(),t._v(" "),a("span",{staticClass:"pag-nr"},[t._v("Page "+t._s(t.currentPage+1)+" of "+t._s(t.totalPages()))]),t._v(" "),t.showNextPage()?a("span",{staticClass:"pagination-btn",on:{click:function(e){return t.updatePage(t.currentPage+1)}}},[t._v("\n    >\n    ")]):t._e()]):t._e()},staticRenderFns:[]};var v={name:"dashboard",data:function(){return{patients:[],currentPage:0,pageSize:50,visiblePatients:[]}},components:{Pagination:a("VU/8")(p,h,!1,function(t){a("VHks")},"data-v-1ef95c5f",null).exports},created:function(){var t=this;c.collection("patients").orderBy("id").get().then(function(e){e.forEach(function(e){var a={doc_id:e.id,id:e.data().id,first_name:e.data().first_name,last_name:e.data().last_name,age:e.data().age,height:e.data().height,weight:e.data().weight,job:e.data().job};t.patients.push(a),t.updateVisiblePatients()})})},beforeMount:function(){this.updateVisiblePatients()},methods:{sortedByName:function(){var t=this;this.patients=[],c.collection("patients").orderBy("first_name").get().then(function(e){e.forEach(function(e){var a={doc_id:e.id,id:e.data().id,first_name:e.data().first_name,last_name:e.data().last_name,age:e.data().age,height:e.data().height,weight:e.data().weight,job:e.data().job};t.patients.push(a),t.updateVisiblePatients()})})},sortedByAgeDesc:function(){var t=this;this.patients=[],c.collection("patients").orderBy("age","desc").get().then(function(e){e.forEach(function(e){var a={doc_id:e.id,id:e.data().id,first_name:e.data().first_name,last_name:e.data().last_name,age:e.data().age,height:e.data().height,weight:e.data().weight,job:e.data().job};t.patients.push(a),t.updateVisiblePatients()})})},sortedByAgeAsc:function(){var t=this;this.patients=[],c.collection("patients").orderBy("age").get().then(function(e){e.forEach(function(e){var a={doc_id:e.id,id:e.data().id,first_name:e.data().first_name,last_name:e.data().last_name,age:e.data().age,height:e.data().height,weight:e.data().weight,job:e.data().job};t.patients.push(a),t.updateVisiblePatients()})})},updatePage:function(t){this.currentPage=t,this.updateVisiblePatients()},updateVisiblePatients:function(){this.visiblePatients=this.patients.slice(this.currentPage*this.pageSize,this.currentPage*this.pageSize+this.pageSize),0===this.visiblePatients.length&&this.currentPage>0&&this.updatePage(this.currentPage-1)}}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("div",{staticClass:"center-align"},[a("br"),t._v(" "),a("button",{staticClass:"btn indigo btn-small",on:{click:t.sortedByName}},[t._v("Sort by name")]),t._v(" "),a("button",{staticClass:"btn indigo btn-small",on:{click:t.sortedByAgeAsc}},[t._v("Sort by age")]),t._v(" "),a("button",{staticClass:"btn indigo btn-small",on:{click:t.sortedByAgeDesc}},[t._v("Sort by age desc")])]),t._v(" "),a("br"),t._v(" "),a("Pagination",{staticClass:"center-align",attrs:{patients:t.patients,currentPage:t.currentPage,pageSize:t.pageSize},on:{"page:update":t.updatePage}}),t._v(" "),a("ul",{staticClass:"collection with_header"},[t._m(0),t._v(" "),t._l(t.visiblePatients,function(e){return a("li",{key:e.id,staticClass:"center-align collection-item col s12"},[t._v("\n      "+t._s(e.first_name)+" "+t._s(e.last_name)+" "),a("div",{staticClass:"chip indigo lighten-3"},[t._v(t._s(e.age))]),t._v(" "),a("router-link",{staticClass:"secondary-content",attrs:{to:{name:"view-patient",params:{id:e.id}}}},[a("div",{staticClass:"chip indigo lighten-3"},[a("i",{staticClass:"fa fa-info",attrs:{"aria-hidden":"true"}})])])],1)})],2),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large pulse indigo darken-3",attrs:{to:"/new"}},[a("i",{staticClass:"fa fa-address-card"})])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"collection-header"},[e("h4",{staticClass:"center-align col s6 m9 l12"},[this._v("Patients")])])}]},A=a("VU/8")(v,f,!1,null,null,null).exports,C=a("FfS/"),I=a.n(C),E={name:"new-patient",data:function(){return{id:null,first_name:null,last_name:null,age:null,weight:null,height:null,job:null,drugs:[]}},methods:{addPatient:function(){var t=this;c.collection("patients").add({id:I.a.random.number({min:5e3}),first_name:this.first_name,last_name:this.last_name,age:Number(this.age),weight:this.weight,height:this.height,job:this.job,drugs:this.drugs}).then(function(e){t.$router.push("/")}).catch(function(t){return console.log(t)})}}},P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"new-patient center-align"}},[a("h3",[t._v("New patient")]),t._v(" "),a("div",{staticClass:"row center-align"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.addPatient(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],attrs:{type:"text",required:""},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}}),t._v(" "),a("label",[t._v("First Name")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],attrs:{type:"text",required:""},domProps:{value:t.last_name},on:{input:function(e){e.target.composing||(t.last_name=e.target.value)}}}),t._v(" "),a("label",[t._v("Last Name")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.age,expression:"age"}],attrs:{type:"text",required:""},domProps:{value:t.age},on:{input:function(e){e.target.composing||(t.age=e.target.value)}}}),t._v(" "),a("label",[t._v("Age")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],attrs:{type:"text",required:""},domProps:{value:t.weight},on:{input:function(e){e.target.composing||(t.weight=e.target.value)}}}),t._v(" "),a("label",[t._v("Weight (kg)")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],attrs:{type:"text",required:""},domProps:{value:t.height},on:{input:function(e){e.target.composing||(t.height=e.target.value)}}}),t._v(" "),a("label",[t._v("Height (cm)")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.job,expression:"job"}],attrs:{type:"text",required:""},domProps:{value:t.job},on:{input:function(e){e.target.composing||(t.job=e.target.value)}}}),t._v(" "),a("label",[t._v("Job")])])]),t._v(" "),a("button",{staticClass:"btn indigo",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn indigo",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},O=a("VU/8")(E,P,!1,null,null,null).exports,b={name:"edit-patient",data:function(){return{id:null,first_name:null,last_name:null,age:null,weight:null,height:null,job:null}},beforeRouteEnter:function(t,e,a){c.collection("patients").where("id","==",t.params.id).get().then(function(t){t.forEach(function(t){a(function(e){e.id=t.data().id,e.first_name=t.data().first_name,e.last_name=t.data().last_name,e.age=t.data().age,e.height=t.data().height,e.weight=t.data().weight,e.job=t.data().job})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;c.collection("patients").where("id","==",this.$route.params.id).get().then(function(e){e.forEach(function(e){t.id=e.data().id,t.first_name=e.data().first_name,t.last_name=e.data().last_name,t.age=e.data().age,t.height=e.data().height,t.weight=e.data().weight,t.job=e.data().job})})},updatePatient:function(){var t=this;c.collection("patients").where("id","==",this.$route.params.id).get().then(function(e){e.forEach(function(e){e.ref.update({id:t.id,first_name:t.first_name,last_name:t.last_name,age:Number(t.age),weight:t.weight,height:t.height,job:t.job}).then(function(){t.$router.push({name:"view-patient",params:{id:t.id}})})})})}}},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"edit-patient"}},[a("h3",[t._v("Edit patient")]),t._v(" "),a("div",{staticClass:"row center-align"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.updatePatient(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{disabled:"",type:"text",required:""},domProps:{value:t.id},on:{input:function(e){e.target.composing||(t.id=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],attrs:{type:"text",required:""},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],attrs:{type:"text",required:""},domProps:{value:t.last_name},on:{input:function(e){e.target.composing||(t.last_name=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.age,expression:"age"}],attrs:{type:"text",required:""},domProps:{value:t.age},on:{input:function(e){e.target.composing||(t.age=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.weight,expression:"weight"}],attrs:{type:"text",required:""},domProps:{value:t.weight},on:{input:function(e){e.target.composing||(t.weight=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],attrs:{type:"text",required:""},domProps:{value:t.height},on:{input:function(e){e.target.composing||(t.height=e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.job,expression:"job"}],attrs:{type:"text",required:""},domProps:{value:t.job},on:{input:function(e){e.target.composing||(t.job=e.target.value)}}})])]),t._v(" "),a("button",{staticClass:"btn indigo",attrs:{type:"submit"}},[t._v("Submit")]),t._v(" "),a("router-link",{staticClass:"btn indigo",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},y=a("VU/8")(b,R,!1,null,null,null).exports,w={name:"view-patient",data:function(){return{id:null,first_name:null,last_name:null,age:null,job:null,height:null,weight:null,drugs:[]}},beforeRouteEnter:function(t,e,a){c.collection("patients").where("id","==",t.params.id).get().then(function(t){t.forEach(function(t){a(function(e){e.id=t.data().id,e.first_name=t.data().first_name,e.last_name=t.data().last_name,e.age=t.data().age,e.height=t.data().height,e.weight=t.data().weight,e.job=t.data().job,e.drugs=t.data().drugs})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;c.collection("patients").where("id","==",this.$route.params.id).get().then(function(e){e.forEach(function(e){t.id=e.data().id,t.first_name=e.data().first_name,t.last_name=e.data().last_name,t.age=e.data().age,t.height=e.data().height,t.weight=e.data().weight,t.job=e.data().job,t.drugs=e.data().drugs})})},deletePatient:function(){var t=this;confirm("Do you want to delete the patient?")&&c.collection("patients").where("id","==",this.$route.params.id).get().then(function(e){e.forEach(function(e){e.ref.delete(),t.$router.push("/")})})},deleteDrug:function(t){var e=this;confirm("Do you want to delete this drug?")&&(this.drugs.splice(t,1),c.collection("patients").where("id","==",this.$route.params.id).get().then(function(t){t.forEach(function(t){t.ref.update({id:e.id,first_name:e.first_name,last_name:e.last_name,age:e.age,weight:e.weight,height:e.height,job:e.job,drugs:e.drugs}).then(function(){e.$router.push({name:"view-patient",params:{id:e.id}}).catch(function(t){})})})}))},showDrugs:function(){}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"view-patient"}},[a("ul",{staticClass:"collection with-header center-align"},[a("li",{staticClass:"collection-header"},[a("h4",[t._v(t._s(t.first_name)+" "+t._s(t.last_name))])]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("Age: "+t._s(t.age)+" years old")]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("Weight: "+t._s(t.weight)+" kg")]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("Height: "+t._s(t.height)+" cm")]),t._v(" "),a("li",{staticClass:"collection-item"},[t._v("Job: "+t._s(t.job))]),t._v(" "),a("li",{staticClass:"collection-header"},[t._v("Drugs:")]),t._v(" "),t._l(t.drugs,function(e,i){return a("li",{key:e.drug_id,staticClass:"center-align collection-item"},[t._v("\n      "+t._s(e.drug_name)+" "),a("div",{staticClass:"chip indigo lighten-3"},[t._v(t._s(e.drug_type))]),t._v(" "),a("div",{staticClass:"chip indigo lighten-3 right-align",on:{click:function(e){return t.deleteDrug(i)}}},[a("i",{staticClass:"fa fa-minus-circle",attrs:{"aria-hidden":"true"}})])])})],2),t._v(" "),a("div",{staticClass:"center-align"},[a("button",{staticClass:"btn indigo",on:{click:t.deletePatient}},[t._v("Delete")])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"fixed-action-btn"},[a("router-link",{staticClass:"btn-floating btn-large pulse indigo darken-3",attrs:{to:{name:"add-drug",params:{id:t.id}}}},[a("i",{staticClass:"fa fa-plus"})]),t._v(" "),a("router-link",{staticClass:"btn-floating btn-large pulse indigo darken-3",attrs:{to:{name:"edit-patient",params:{id:t.id}}}},[a("i",{staticClass:"fa fa-pencil"})])],1)])},staticRenderFns:[]},T=a("VU/8")(w,M,!1,null,null,null).exports,N=a("woOf"),D=a.n(N),L=[{drug_id:1,drug_name:"ABACAVIR SANDOZ 300 mg",drug_type:"COMPRIMATE"},{drug_id:2,drug_name:"ACC 600 mg",drug_type:"COMPRIMATE"},{drug_id:3,drug_name:"ACCOFIL 48 MU/0,5 ml",drug_type:"SOLUTIE INJECTABILA"},{drug_id:4,drug_name:"ACCU-THYROX 25 micrograme/5 ml",drug_type:"SOLUTIE ORALA"},{drug_id:5,drug_name:"ACCUPRO 5 mg",drug_type:"COMPRIMATE"},{drug_id:6,drug_name:"ACETAZOLAMIDA ARENA 250 mg",drug_type:"COMPRIMATE"},{drug_id:7,drug_name:"ACICLOVIR-RICHTER 50mg/g",drug_type:"CREMA"},{drug_id:8,drug_name:"ACID ACETILSALICILIC SANDOZ 75 mg",drug_type:"COMPRIMATE"},{drug_id:9,drug_name:"ACID IBANDRONIC GLENMARK 50 mg",drug_type:"COMPRIMATE"},{drug_id:10,drug_name:"ACLEXA 100 mg",drug_type:"CAPSULE"},{drug_id:11,drug_name:"ACTOS 30mg",drug_type:"COMPRIMATE"},{drug_id:12,drug_name:"ACTRAPHANE 30",drug_type:"SUSPENSIE INJECTABILA"},{drug_id:13,drug_name:"ACUVER 8 mg/doza",drug_type:"SOLUTIE ORALA"},{drug_id:14,drug_name:"AERIUS 0,5mg/ml",drug_type:"SOLUTIE ORALA"},{drug_id:15,drug_name:"AMICOR 20 mg",drug_type:"COMPRIMATE"},{drug_id:16,drug_name:"AMINOVEN 5%",drug_type:"SOLUTIE PERFUZABILA"},{drug_id:17,drug_name:"AMLESSA 4 mg/10 mg",drug_type:"COMPRIMATE"},{drug_id:18,drug_name:"ATACAND 8 mg",drug_type:"COMPRIMATE"},{drug_id:19,drug_name:"ATOMOXETINA ACCORD 18 mg",drug_type:"CAPSULE"},{drug_id:20,drug_name:"BETADINE UNGUENT",drug_type:"UNGUENT"},{drug_id:21,drug_name:"BETAHISTINA DICLORHIDRAT AUROBINDO 24 mg",drug_type:"COMPRIMATE"},{drug_id:22,drug_name:"BIDIAB 400 mg/2,5 mg",drug_type:"CAPSULE"},{drug_id:23,drug_name:"BRIDION 100 mg/ml",drug_type:"SOLUTIE INJECTABILA"},{drug_id:24,drug_name:"BYETTA 10µg/doza",drug_type:"SOLUTIE INJECTABILA"},{drug_id:25,drug_name:"CAL-D-VITA 600 mg/400 UI",drug_type:"COMPRIMATE"},{drug_id:26,drug_name:"CANDESARTAN CILEXETIL MCC 8 mg",drug_type:"COMPRIMATE"},{drug_id:27,drug_name:"CAPD/DPCA 4",drug_type:"SOLUTIEUTIE DIALIZA"},{drug_id:28,drug_name:"CASODEX 150 mg",drug_type:"COMPRIMATE"},{drug_id:29,drug_name:"CEFALEXIN SANDOZ",drug_type:"CAPSULE"},{drug_id:30,drug_name:"CITARABINA ACCORD 20 mg/ml",drug_type:"SOLUTIE INJECTABILA"},{drug_id:31,drug_name:"CLINDAMYCIN - MIP 300 mg",drug_type:"COMPRIMATE"},{drug_id:32,drug_name:"CLORURA DE SODIU 0,9%",drug_type:"SOLUTIE PERFUZABILA"},{drug_id:33,drug_name:"COLDREX NITE",drug_type:"SIROP"},{drug_id:34,drug_name:"DA-BONE 70 mg/5600 UI",drug_type:"COMPRIMATE"},{drug_id:35,drug_name:"DAIVOBET 50 micrograme/0,5mg/g",drug_type:"UNGUENT"},{drug_id:36,drug_name:"DALMEVIN 50 mg",drug_type:"COMPRIMATE"},{drug_id:37,drug_name:"DAPLAX 200 mg",drug_type:"PULBERE"},{drug_id:38,drug_name:"DEEP HEAT RUB",drug_type:"CREMA"},{drug_id:39,drug_name:"DEPRESINAL 5 mg",drug_type:"COMPRIMATE"},{drug_id:40,drug_name:"DICLOFENAC MCC 50 mg/g",drug_type:"GEL"},{drug_id:41,drug_name:"DOPEGYT 250 mg",drug_type:"COMPRIMATE"},{drug_id:42,drug_name:"DOXICICLINA ATB 100 mg",drug_type:"CAPSULE"},{drug_id:43,drug_name:"DULOXETINA AUROBINDO 60 mg",drug_type:"CAPSULE"},{drug_id:44,drug_name:"ELIDEL 10 mg/g",drug_type:"CREMA"},{drug_id:45,drug_name:"ERDOMED 300 mg",drug_type:"CAPSULE"},{drug_id:46,drug_name:"FAMODIN 20",drug_type:"COMPRIMATE"},{drug_id:47,drug_name:"FELODIPIN SANDOZ 5 mg",drug_type:"COMPRIMATE"},{drug_id:48,drug_name:"FENTANYL TTS SANDOZ 100 µg/h",drug_type:"PLASTURE"},{drug_id:49,drug_name:"FOSINOPRIL AUROBINDO 10 mg",drug_type:"COMPRIMATE"},{drug_id:50,drug_name:"GABAPENTIN AUROBINDO 300 mg",drug_type:"COMPRIMATE"},{drug_id:51,drug_name:"GAVISCON CU AROMA DE CAPSUNI",drug_type:"COMPRIMATE"},{drug_id:52,drug_name:"GLIDIPION 30 mg",drug_type:"COMPRIMATE"},{drug_id:53,drug_name:"HELIDES 20 mg",drug_type:"CAPSULE"},{drug_id:54,drug_name:"HIDRASEC 100 mg",drug_type:"CAPSULE"},{drug_id:55,drug_name:"IBUPROFEN ALKALOID-INT 200 mg",drug_type:"COMPRIMATE"},{drug_id:56,drug_name:"IMATINIB AUROBINDO 400 mg",drug_type:"COMPRIMATE"},{drug_id:57,drug_name:"KALYDECO 50 mg",drug_type:"GRANULE"},{drug_id:58,drug_name:"KAMISTAD GEL",drug_type:"GEL"},{drug_id:59,drug_name:"KLACID I.V. 500 mg",drug_type:"PULBERE"},{drug_id:60,drug_name:"LATUDA 37 mg",drug_type:"COMPRIMATE"},{drug_id:61,drug_name:"LIDOCAINA KABI 20 mg/ml",drug_type:"SOLUTIE INJECTABILA"},{drug_id:62,drug_name:"MABRON RETARD 100 mg",drug_type:"COMPRIMATE"},{drug_id:63,drug_name:"MECLODIN",drug_type:"COMPRIMATE"},{drug_id:64,drug_name:"MAXTRID 0,5 mg",drug_type:"COMPRIMATE"},{drug_id:65,drug_name:"METOSUCCINAT SANDOZ 47,5 mg",drug_type:"COMPRIMATE"},{drug_id:66,drug_name:"NAPROXEN AUROBINDO 500 mg",drug_type:"COMPRIMATE"},{drug_id:67,drug_name:"NEMDATINE 10mg",drug_type:"COMPRIMATE"},{drug_id:68,drug_name:"NOVORAPID 100 unitati/ml",drug_type:"SOLUTIE INJECTABILA"},{drug_id:69,drug_name:"OLANZAPINA AUROBINDO 15 mg",drug_type:"COMPRIMATE"},{drug_id:70,drug_name:"PADUDEN SR 300 mg",drug_type:"CAPSULE"},{drug_id:71,drug_name:"PARNIDO 3 mg",drug_type:"COMPRIMATE"},{drug_id:72,drug_name:"PERINDOPRIL TOSILAT TEVA 5 mg",drug_type:"COMPRIMATE"},{drug_id:73,drug_name:"PRAMIPEXOLE ACCORD 0,18 mg",drug_type:"COMPRIMATE"},{drug_id:74,drug_name:"PREGAMID 150 mg",drug_type:"CAPSULE"},{drug_id:75,drug_name:"QUETIAPINA SANDOZ 300 mg",drug_type:"COMPRIMATE"},{drug_id:76,drug_name:"RAMIPRIL AUROBINDO 5 mg",drug_type:"COMPRIMATE"},{drug_id:77,drug_name:"ROSUCARD 10 mg",drug_type:"COMPRIMATE"},{drug_id:78,drug_name:"SANADOR PLUS 300 mg/30 mg",drug_type:"COMPRIMATE"},{drug_id:79,drug_name:"SARIDON",drug_type:"COMPRIMATE"},{drug_id:80,drug_name:"SIDARSO 8 mg",drug_type:"CAPSULE"},{drug_id:81,drug_name:"SINDOLOR",drug_type:"GEL"},{drug_id:82,drug_name:"SOLUTIEPADEINE",drug_type:"COMPRIMATE"},{drug_id:83,drug_name:"STEROFUNDIN ISO",drug_type:"SOLUTIE PERFUZABILA"},{drug_id:84,drug_name:"STREPSILS INTENSIV 8,75 mg/doza",drug_type:"SPRAY"},{drug_id:85,drug_name:"STRIVERDI RESPIMAT 2,5 micrograme",drug_type:"SOLUTIE DE INHALAT"},{drug_id:86,drug_name:"TADILECTO 5 mg",drug_type:"COMPRIMATE"},{drug_id:87,drug_name:"TANDESAR 8 mg",drug_type:"COMPRIMATE"},{drug_id:88,drug_name:"TEOTARD 200 mg",drug_type:"CAPSULE"},{drug_id:89,drug_name:"TORVACARD 10 mg",drug_type:"COMPRIMATE"},{drug_id:90,drug_name:"TWINRIX ADULT",drug_type:"SUSPENSIE INJECTABILA"},{drug_id:91,drug_name:"VAMADRID 160 mg",drug_type:"COMPRIMATE"},{drug_id:92,drug_name:"VARDENAFIL SANDOZ 20 mg",drug_type:"COMPRIMATE"},{drug_id:93,drug_name:"VEPESID 50 mg",drug_type:"CAPSULE"},{drug_id:94,drug_name:"VESISTAD 10 mg",drug_type:"COMPRIMATE"},{drug_id:95,drug_name:"VEZIMED 10 mg",drug_type:"COMPRIMATE"},{drug_id:96,drug_name:"VIAVARDIS 20 mg",drug_type:"COMPRIMATE"},{drug_id:97,drug_name:"VOLTAREN OPHTHA CD 1 mg/ml",drug_type:"PICATURI OFTALMOLOGICE"},{drug_id:98,drug_name:"XEFO RAPID 8 mg",drug_type:"COMPRIMATE"},{drug_id:99,drug_name:"ZOLPIDEM AUROBINDO 10 mg",drug_type:"COMPRIMATE"},{drug_id:100,drug_name:"ZYVOXID 600 mg",drug_type:"COMPRIMATE"}],S={name:"initialize",data:function(){return{}},methods:{addDrugs:function(){for(var t=0;t<L.length;t++)c.collection("drugs").add(L[t]).then(console.log("Drug added!"))},addPatients:function(){for(var t=1;t<800;t++){for(var e=I.a.name.firstName(),a=I.a.name.lastName(),i=I.a.random.number({min:18,max:80}),n=I.a.random.number({min:160,max:195}),r=I.a.random.number({min:50,max:100}),s=I.a.name.jobTitle(),d=I.a.random.number({min:1,max:5}),u=[],g=0;g<d;g++)u.push(L[I.a.random.number(100)]);var o={id:t,first_name:e,last_name:a,age:i,height:n,weight:r,job:s,drugs:u.map(function(t){return D()({},t)})};c.collection("patients").add(o).then(console.log("Patient added!"))}},addRelationships:function(){for(var t=0;t<5e3;t++){var e={patient_id:I.a.random.number(1e3),drug_id:I.a.random.number(100)};c.collection("relationships").add(e).then(console.log("Relationship added!"))}}}},U={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"initialize"}},[e("div",{staticClass:"center-align"},[e("br"),this._v(" "),e("button",{staticClass:"btn indigo",on:{click:this.addPatients}},[this._v("Add patients")]),this._v(" "),e("button",{staticClass:"btn indigo",on:{click:this.addDrugs}},[this._v("Add drugs")])])])},staticRenderFns:[]},x=a("VU/8")(S,U,!1,null,null,null).exports,B={name:"add-drug",data:function(){return{id:null,first_name:null,last_name:null,age:null,weight:null,height:null,job:null,drugs:[],drug_name:null,drug_type:null}},beforeRouteEnter:function(t,e,a){c.collection("patients").where("id","==",t.params.id).get().then(function(t){t.forEach(function(t){a(function(e){e.id=t.data().id,e.first_name=t.data().first_name,e.last_name=t.data().last_name,e.age=t.data().age,e.height=t.data().height,e.weight=t.data().weight,e.job=t.data().job,e.drugs=t.data().drugs})})})},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this;c.collection("patients").where("id","==",this.$route.params.id).get().then(function(e){e.forEach(function(e){t.id=e.data().id,t.first_name=e.data().first_name,t.last_name=e.data().last_name,t.age=e.data().age,t.height=e.data().height,t.weight=e.data().weight,t.job=e.data().job,t.drugs=e.data().drugs})})},addDrug:function(){var t=this;this.drugs.push({drug_id:I.a.random.number({min:500}),drug_name:this.drug_name,drug_type:this.drug_type}),c.collection("patients").where("id","==",this.$route.params.id).get().then(function(e){e.forEach(function(e){e.ref.update({id:t.id,first_name:t.first_name,last_name:t.last_name,age:t.age,weight:t.weight,height:t.height,job:t.job,drugs:t.drugs}).then(function(){t.$router.push({name:"view-patient",params:{id:t.id}})})})})}}},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"add-drug center-align"}},[a("h3",[t._v("Add drug")]),t._v(" "),a("div",{staticClass:"row center-align"},[a("form",{staticClass:"col s12",on:{submit:function(e){return e.preventDefault(),t.addDrug(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.drug_name,expression:"drug_name"}],attrs:{type:"text",required:""},domProps:{value:t.drug_name},on:{input:function(e){e.target.composing||(t.drug_name=e.target.value)}}}),t._v(" "),a("label",[t._v("Drug name")])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"input-field col s12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.drug_type,expression:"drug_type"}],attrs:{type:"text",required:""},domProps:{value:t.drug_type},on:{input:function(e){e.target.composing||(t.drug_type=e.target.value)}}}),t._v(" "),a("label",[t._v("Drug type")])])]),t._v(" "),a("button",{staticClass:"btn indigo",attrs:{type:"submit"}},[t._v("Add")]),t._v(" "),a("router-link",{staticClass:"btn indigo",attrs:{to:"/"}},[t._v("Cancel")])],1)])])},staticRenderFns:[]},V=a("VU/8")(B,j,!1,null,null,null).exports,k={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(t){var e=this;r.a.auth().signInWithEmailAndPassword(this.email,this.password).then(function(t){alert("Welcome, "+e.email+"!"),e.$router.push("/")},function(t){alert(t.message)}),t.preventDefault()}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col s8 offset-s2 z-depth-5"},[a("h4",{staticClass:"center-align",attrs:{id:"title"}},[t._v("Login")]),t._v(" "),a("form",[a("div",{staticClass:"input-field",attrs:{id:"username"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"validate",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"username"}},[t._v("Email")])]),t._v(" "),a("div",{staticClass:"input-field",attrs:{id:"password"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"validate",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Password")])]),t._v(" "),a("button",{staticClass:"waves-effect indigo btn btn-medium col s12",attrs:{id:"loginbtn"},on:{click:t.login}},[t._v("Login")]),t._v(" "),a("br")]),t._v(" "),a("br"),t._v(" "),a("br")])])])},staticRenderFns:[]},F=a("VU/8")(k,$,!1,null,null,null).exports,q={name:"register",data:function(){return{email:"",password:""}},methods:{register:function(t){var e=this;r.a.auth().createUserWithEmailAndPassword(this.email,this.password).then(function(t){alert("Account created!"),e.$router.push("/")},function(t){alert(t.message)}),t.preventDefault()}}},z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("br"),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col s8 offset-s2 z-depth-5"},[a("h4",{staticClass:"center-align",attrs:{id:"title"}},[t._v("Register")]),t._v(" "),a("form",[a("div",{staticClass:"input-field",attrs:{id:"username"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"validate",attrs:{type:"text"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"username"}},[t._v("Email")])]),t._v(" "),a("div",{staticClass:"input-field",attrs:{id:"password"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"validate",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),a("label",{attrs:{for:"password"}},[t._v("Password")])]),t._v(" "),a("button",{staticClass:"waves-effect indigo btn btn-medium col s12",attrs:{id:"loginbtn"},on:{click:t.register}},[t._v("Register")]),t._v(" "),a("br")]),t._v(" "),a("br"),t._v(" "),a("br")])])])},staticRenderFns:[]},G=a("VU/8")(q,z,!1,null,null,null).exports;i.a.use(l.a);var H=new l.a({routes:[{path:"/",name:"dashboard",component:A,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:F,meta:{requiresGuest:!0}},{path:"/register",name:"register",component:G,meta:{requiresGuest:!0}},{path:"/drug/:id",name:"add-drug",component:V,meta:{requiresAuth:!0}},{path:"/init",name:"initialize",component:x},{path:"/new",name:"new-patient",component:O,meta:{requiresAuth:!0}},{path:"/edit/:id",name:"edit-patient",component:y,meta:{requiresAuth:!0}},{path:"/:id",name:"view-patient",component:T,meta:{requiresAuth:!0}}]});H.beforeEach(function(t,e,a){t.matched.some(function(t){return t.meta.requiresAuth})?r.a.auth().currentUser?a():a({path:"/login",query:{redirect:t.fullPath}}):t.matched.some(function(t){return t.meta.requiresGuest})&&r.a.auth().currentUser?a({path:"/",query:{redirect:t.fullPath}}):a()});var Z=H;i.a.config.productionTip=!1;r.a.auth().onAuthStateChanged(function(t){new i.a({el:"#app",router:Z,components:{App:o},template:"<App/>"})})},VHks:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f8f57e5b7e87f1ba888d.js.map