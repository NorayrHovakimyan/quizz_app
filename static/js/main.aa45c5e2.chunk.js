(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports={btn:"Form_btn__2TPDk"}},33:function(e,t,a){e.exports=a(51)},41:function(e,t,a){},42:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(29),l=a.n(r),i=a(3),c=a(4),u=a(6),o=a(5),m=a(2),d=a(7),h=a(10),p=a(14),g=a(32),f={apiKey:"AIzaSyCofTa9JQhKMDLU0r573ImWR3u67eb8riY",authDomain:"fir-app-9e3c1.firebaseapp.com",databaseURL:"https://fir-app-9e3c1.firebaseio.com",projectId:"fir-app-9e3c1",storageBucket:"fir-app-9e3c1.appspot.com",messagingSenderId:"759651148681",appId:"1:759651148681:web:d5c73df477d80a94"},v=a(9),E=a.n(v),b=(a(27),a(20),function(){return s.a.createElement("div",{className:"container center"},s.a.createElement("div",{className:"preloader-wrapper big active",style:{position:"absolute",top:"50%"}},s.a.createElement("div",{className:"spinner-layer spinner-blue-only"},s.a.createElement("div",{className:"circle-clipper left"},s.a.createElement("div",{className:"circle"})),s.a.createElement("div",{className:"gap-patch"},s.a.createElement("div",{className:"circle"})),s.a.createElement("div",{className:"circle-clipper right"},s.a.createElement("div",{className:"circle"})))))}),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={currentPickedAnswer:null},a.changeHandler=a.changeHandler.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"changeHandler",value:function(e){e.preventDefault(),this.setState({currentPickedAnswer:e.currentTarget.value})}},{key:"componentDidMount",value:function(){localStorage.getItem("questionUserPick2")&&this.setState({currentPickedAnswer:JSON.parse(localStorage.getItem("questionUserPick2"))})}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("questionUserPick2",JSON.stringify(t.currentPickedAnswer))}},{key:"render",value:function(){var e=this.props.data,t=this.props.data.answers;return s.a.createElement("div",{className:"container"},s.a.createElement("div",null," type: ",e.type," "),s.a.createElement("h5",null,e.id," from ",this.props.questionCount),s.a.createElement("h4",{className:"center"},e.title," "),s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement("button",{onClick:this.changeHandler,className:this.state.currentPickedAnswer===t.answer1?"activeTest btnCustom-default":"btnCustom-default",value:t.answer1},t.answer1)),s.a.createElement("p",null,s.a.createElement("button",{onClick:this.changeHandler,className:this.state.currentPickedAnswer===t.answer2?"activeTest btnCustom-default":"btnCustom-default",value:t.answer2},t.answer2)),s.a.createElement("p",null,s.a.createElement("button",{onClick:this.changeHandler,className:this.state.currentPickedAnswer===t.answer3?"activeTest btnCustom-default":"btnCustom-default",value:t.answer3},t.answer3)),s.a.createElement("p",null,s.a.createElement("button",{onClick:this.changeHandler,className:this.state.currentPickedAnswer===t.answer4?"activeTest btnCustom-default":"btnCustom-default",value:t.answer4},t.answer4))))}}]),t}(s.a.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={hasClassName:!1,currPickedAnswers:[]},a.clickHandler=a.clickHandler.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"clickHandler",value:function(e){var t=this,a=this.state.currPickedAnswers,n=a;a.includes(e.currentTarget.value)?n.forEach(function(a,s){-1!==a.indexOf(e.currentTarget.value)&&(n.splice(s,1),t.setState({currPickedAnswers:n}))}):(n.push(e.currentTarget.value),this.setState({currPickedAnswers:n}))}},{key:"componentDidMount",value:function(){localStorage.getItem("questionUserPick3")&&this.setState({currPickedAnswers:JSON.parse(localStorage.getItem("questionUserPick3"))})}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("questionUserPick3",JSON.stringify(t.currPickedAnswers))}},{key:"render",value:function(){var e=this.props.data,t=this.props.data.answers;return window.s=this.state,s.a.createElement("div",{className:"container"},s.a.createElement("div",null," type: ",e.type," "),s.a.createElement("h5",null,e.id," from ",this.props.questionCount),s.a.createElement("h4",{className:"center"},e.title," "),s.a.createElement("div",null,s.a.createElement("p",null,s.a.createElement("button",{onClick:this.clickHandler,className:this.state.currPickedAnswers.includes(t.answer1)?"activeTest btnCustom-default":"btnCustom-default",value:t.answer1},t.answer1)),s.a.createElement("p",null,s.a.createElement("button",{onClick:this.clickHandler,className:this.state.currPickedAnswers.includes(t.answer2)?"activeTest btnCustom-default":"btnCustom-default",value:t.answer2},t.answer2)),s.a.createElement("p",null,s.a.createElement("button",{onClick:this.clickHandler,className:this.state.currPickedAnswers.includes(t.answer3)?"activeTest btnCustom-default":"btnCustom-default",value:t.answer3},t.answer3)),s.a.createElement("p",null,s.a.createElement("button",{onClick:this.clickHandler,className:this.state.currPickedAnswers.includes(t.answer4)?"activeTest btnCustom-default":"btnCustom-default",value:t.answer4},t.answer4))))}}]),t}(s.a.Component),N=(a(41),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={currentPickedAnswer:null},a.changeHandler=a.changeHandler.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"changeHandler",value:function(e){e.preventDefault(),this.setState({currentPickedAnswer:e.currentTarget.value})}},{key:"componentDidMount",value:function(){localStorage.getItem("questionUserPick1")&&this.setState({currentPickedAnswer:JSON.parse(localStorage.getItem("questionUserPick1"))})}},{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("questionUserPick1",JSON.stringify(t.currentPickedAnswer))}},{key:"render",value:function(){window.output=this.state;var e=this.props.data,t=this.props.data.answers;return s.a.createElement("div",{className:"container"},s.a.createElement("div",null," type: ",e.type," "),s.a.createElement("h5",null,e.id," from ",this.props.questionCount),s.a.createElement("h4",null,e.title," "),s.a.createElement("div",null,s.a.createElement("img",{src:"".concat(e.imageUrl),alt:"output"})),s.a.createElement("form",null,s.a.createElement("p",null,s.a.createElement("button",{className:this.state.currentPickedAnswer===t.answer1?"activeTest btnCustom-default":"btnCustom-default",onClick:this.changeHandler,value:t.answer1},t.answer1)),s.a.createElement("p",null,s.a.createElement("button",{className:this.state.currentPickedAnswer===t.answer2?"activeTest btnCustom-default":"btnCustom-default",onClick:this.changeHandler,value:t.answer2},t.answer2)),s.a.createElement("p",null,s.a.createElement("button",{className:this.state.currentPickedAnswer===t.answer3?"activeTest btnCustom-default":"btnCustom-default",onClick:this.changeHandler,value:t.answer3},t.answer3)),s.a.createElement("p",null,s.a.createElement("button",{className:this.state.currentPickedAnswer===t.answer4?"activeTest btnCustom-default":"btnCustom-default",onClick:this.changeHandler,value:t.answer4},t.answer4))))}}]),t}(s.a.Component));a(42);E.a.initializeApp(f);var C=E.a.database(),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).updateCurr=function(e){var t=localStorage.getItem("questionUserPick1");t=JSON.parse(t);var a=localStorage.getItem("questionUserPick2");a=JSON.parse(a);var n=localStorage.getItem("questionUserPick3");n=JSON.parse(n);var s=[];s.push(t,a,n),e.setState={getCurrPickedAnswers:s}},a.questionNumber=function(e,t){return s.a.createElement("div",{className:"center"},Object(g.a)(Array(e)).map(function(e,t){var n=t+1;return s.a.createElement("span",{key:t},s.a.createElement("button",{key:t,style:{marginRight:"10px"},className:"".concat(a.state.activeIndex===t?a.state.activeQuestion:""," btn-floating waves-effect waves-light")},s.a.createElement("i",{onClick:function(e){e.stopPropagation(),a.changeCurrentQuestion(e,t)},key:t,className:"material-icons"},n)))}))},a.state={loading:!1,questions:null,index:0,userPickValue:null,rightAnswersAmount:0,checked:!1,activeQuestion:"activeQuestion",activeIndex:0,rightAnswers:0},a.iterateQuestion=a.iterateQuestion.bind(Object(m.a)(a)),a.getCurrVal=a.getCurrVal.bind(Object(m.a)(a)),a.questionNumber=a.questionNumber.bind(Object(m.a)(a)),a.changeCurrentQuestion=a.changeCurrentQuestion.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;C.ref("allQuestions").on("value",function(t){var a=t.val(),n=[];for(var s in a)a.hasOwnProperty(s)&&n.push({id:a[s].id,type:a[s].type,rightAnswer:a[s].rightAnswer,title:a[s].title,answers:a[s].answers,imageUrl:a[s].imageUrl});e.setState({questions:n,loading:!1})})}},{key:"componentWillUpdate",value:function(e,t){this.updateCurr(this.state),localStorage.setItem("currentQuestionIndex",JSON.stringify(t.activeIndex))}},{key:"changeCurrentQuestion",value:function(e,t){e.preventDefault(),e.stopPropagation(),localStorage.getItem("currentQuestionIndex",this.setState({activeIndex:t,index:t,checked:!1,activeQuestion:"activeQuestion"}))}},{key:"go",value:function(){var e=this;if(null!==this.state.questions&&this.state.questions.length>0){if(this.state.index===this.state.questions.length){this.updateCurr(this.state);var t=this.state.setState.getCurrPickedAnswers,a=this.state.questions,n=0;return t.forEach(function(t,s){a[s].rightAnswer.includes(t)&&a[s].rightAnswer[s]&&(n++,e.setState({rightAnswers:n}))}),E.a.database().ref().child("userAnswers").push(t),localStorage.removeItem("questionUserPick1"),localStorage.removeItem("questionUserPick2"),localStorage.removeItem("questionUserPick3"),localStorage.removeItem("currentQuestionIndex"),console.log("done!"),s.a.createElement("div",null,s.a.createElement("h1",{className:"center"},"You`ve Scored ",this.state.rightAnswers," from ",this.state.questions.length),s.a.createElement("h3",{className:"center"},s.a.createElement(h.b,{to:"/quizz_app/form"},"Click me!")))}var r=this.state.index,l=this.state.questions[r],i=this.questionNumber(this.state.questions.length,r);switch(l.type){case"outputSelect":return s.a.createElement("div",{className:"container"},i,s.a.createElement(N,{questionCount:this.state.questions.length,data:l,getCurrPickedValue:this.getCurrPickedValue,userPickedAnswers:this.state.userPickedAnswers,checked:this.state.checked,checkedChanger:this.checkedChanger}),s.a.createElement("button",{className:"waves-effect waves-light btn",style:{width:"10em"},onClick:this.iterateQuestion},"next"));case"singleSelect":return s.a.createElement("div",{className:"container"},i,s.a.createElement(w,{questionCount:this.state.questions.length,data:l,getCurrPickedValue:this.getCurrPickedValue,userPickedAnswers:this.state.userPickedAnswers}),s.a.createElement("button",{className:"waves-effect waves-light btn",style:{width:"10em"},onClick:this.iterateQuestion},"next"));case"multiSelect":return s.a.createElement("div",{className:"container"},i,s.a.createElement(k,{questionCount:this.state.questions.length,data:l,getCurrPickedValue:this.getCurrPickedValue,userPickedAnswers:this.state.userPickedAnswers,toggleAttributeChecked:this.state.toggleAttributeChecked,currPick:this.state.currPick,getCurrVal:this.getCurrVal}),s.a.createElement("button",{className:"waves-effect waves-light btn",style:{width:"10em"},onClick:this.iterateQuestion},"next"));default:return s.a.createElement(b,null)}}}},{key:"iterateQuestion",value:function(e){this.setState({index:this.state.index+1,activeIndex:this.state.index+1})}},{key:"getCurrVal",value:function(e){e.stopPropagation(),window.state=this.state;var t=this.state.currPick,a=e.currentTarget.value;t.includes(a)?(t=t.filter(function(e){return e!==a}),this.setState({currPick:t})):(t.push(a),this.setState({currPick:t}))}},{key:"render",value:function(){var e=this.state.index;return window.state=this.state,s.a.createElement("div",{className:"#e3f2fd blue lighten-5"},null!==this.state.questions?this.go(e):s.a.createElement(b,null))}}]),t}(s.a.Component),y=a(15),P=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){e.preventDefault(),a.setState(Object(y.a)({},e.target.id,e.target.value))},a.login=function(e){E.a.auth().signInWithEmailAndPassword(a.state.email,a.state.password).then(function(e){a.props.loggedIn()}).catch(function(e){console.log("wrong username or password")})},a.state={email:"",password:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container m-2"},s.a.createElement("form",{className:"white"},s.a.createElement("h3",{className:"center grey-text text-darken-3",style:{marginBottom:30}},"Sign in"),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange}))),s.a.createElement("button",{className:"btn",onClick:this.login},"Login"))}}]),t}(s.a.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(y.a)({},e.target.id,e.target.value))},a.signUp=function(e){e.preventDefault(),E.a.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).then(function(e){alert("U've created new user"),window.location.pathname="/quizz_app/signIn"}).catch(function(e){alert(e.message)})},a.state={email:"",password:"",firstName:"",lastName:""},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"container m-2"},s.a.createElement("form",{className:"white"},s.a.createElement("h3",{className:"center grey-text text-darken-3",style:{marginBottom:30}},"Sign up"),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"email"},"Email"),s.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"password"},"Password"),s.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"firstName"},"First Name"),s.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),s.a.createElement("div",{className:"input-field"},s.a.createElement("label",{htmlFor:"lastName"},"Last Name"),s.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange}))),s.a.createElement("div",{className:"input-field"},s.a.createElement("button",{className:"btn pink lighten-1 z-deph-0",onClick:this.signUp},"Sign up")))}}]),t}(s.a.Component),j=function(e){return s.a.createElement("div",null,s.a.createElement("ul",{className:"right"},s.a.createElement("li",null,s.a.createElement(h.b,{to:"/quizz_app/"},"Home")),s.a.createElement("li",null,s.a.createElement(h.b,{to:"/quizz_app/tests"},"Tests")),s.a.createElement("li",{onClick:e.loggedOut},s.a.createElement(h.b,{to:"/quizz_app/logout"},"Log Out")),s.a.createElement("li",null,s.a.createElement(h.b,{to:"/quizz_app/",className:"btn btn-floating pink lighten-1"},"N"))))},A=function(){return s.a.createElement("div",null,s.a.createElement("ul",{className:"right"},s.a.createElement("li",null,s.a.createElement(h.b,{to:"/quizz_app/"},"Home")),s.a.createElement("li",null,s.a.createElement(h.b,{to:"/quizz_app/signUp"},"Signup")),s.a.createElement("li",null,s.a.createElement(h.b,{to:"/quizz_app/signIn"},"Login"))))},q=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("h1",{className:"center"},"HomePage")}}]),t}(n.Component),I=a(17),x=a.n(I),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={firstname:"",lastname:"",email:"",telephone:"",comments:""},a.getValues=a.getValues.bind(Object(m.a)(a)),a.sendUserData=a.sendUserData.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"sendUserData",value:function(){E.a.database().ref("userAnswers").child("userPersonalData").push({firstname:this.state.firstname,lastname:this.state.lastname,email:this.state.email,telephone:this.state.telephone,comments:this.state.comments}),window.location.pathname="/quizz_app/home"}},{key:"getValues",value:function(e){e.preventDefault(),this.setState(Object(y.a)({},e.currentTarget.name,e.currentTarget.value))}},{key:"render",value:function(){return window.state=this.state,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("form",{className:"col s12",htmlFor:""},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s6"},s.a.createElement("input",{id:"icon_prefix",type:"text",name:"firstname",onChange:this.getValues,value:this.state.firstname,className:"validate",pattern:"[a-zA-Z0-9/.& -]+",required:!0}),s.a.createElement("label",{htmlFor:"icon_prefix"},s.a.createElement("i",{className:"".concat(x.a.i," fas fa-user-tie")})," First Name")),s.a.createElement("div",{className:"input-field col s6"},s.a.createElement("input",{id:"icon_prefix",type:"text",name:"lastname",onChange:this.getValues,value:this.state.lastname,className:"validate",pattern:"[a-zA-Z0-9/.& -]+",required:!0}),s.a.createElement("label",{htmlFor:"icon_prefix"},s.a.createElement("i",{className:"".concat(x.a.i," fas fa-user-tie")})," Last Name"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s6"},s.a.createElement("input",{id:"email",type:"email",name:"email",onChange:this.getValues,value:this.state.email,className:"validate",pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",required:!0}),s.a.createElement("label",{htmlFor:"email"},s.a.createElement("i",{className:"fas fa-at"})," Email"),s.a.createElement("span",{className:"helper-text","data-error":"Wrong Email Format","data-success":"Valid Email Adress"})),s.a.createElement("div",{className:"input-field col s6"},s.a.createElement("input",{id:"icon_telephone",type:"tel",name:"telephone",value:this.state.telephone,onChange:this.getValues,className:"validate",pattern:"\\d{3}\\d{2}\\d{2}\\d{2}",placeholder:"077112233",required:!0}),s.a.createElement("label",{htmlFor:"icon_telephone"},s.a.createElement("i",{className:"".concat(x.a.i," fas fa-phone-alt")})," Telephone"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"input-field col s12"},s.a.createElement("textarea",{id:"comments",name:"comments",value:this.state.comments,onChange:this.getValues,className:"materialize-textarea",required:!0}),s.a.createElement("label",{htmlFor:"comments",className:"active"},s.a.createElement("i",{className:"fas fa-comments"})," Comments"))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col sm-6 offset-s5"},s.a.createElement("div",{className:"center"},s.a.createElement("button",{onClick:this.sendUserData,className:"".concat(x.a.btn," btn")},"Send")))))))}}]),t}(n.Component),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(o.a)(t).call(this,e))).state={logged:!1,userPickedAnswers:[]},a.loggedIn=a.loggedIn.bind(Object(m.a)(a)),a.loggedOut=a.loggedOut.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"loggedIn",value:function(){this.setState({logged:!0})}},{key:"loggedOut",value:function(){E.a.auth().signOut(),this.setState({logged:!1})}},{key:"componentDidMount",value:function(){this.authListener()}},{key:"authListener",value:function(){var e=this;E.a.auth().onAuthStateChanged(function(t){e.state.logged?e.setState({logged:!0}):e.setState({logged:!1})})}},{key:"render",value:function(){var e=this;return window.state=this.state,s.a.createElement(h.a,null,s.a.createElement("div",{className:"app"},s.a.createElement("nav",{className:"nav-wrapper grey darken-3"},s.a.createElement("div",{className:"container"},this.state.logged?s.a.createElement(j,{loggedOut:this.loggedOut}):s.a.createElement(A,null))),s.a.createElement(p.c,null,!1===this.state.logged?[s.a.createElement(p.a,{key:Math.round(100*Math.random),path:"/signIn",render:function(){return s.a.createElement(P,{loggedIn:e.loggedIn,loggedOut:e.loggedOut})}}),s.a.createElement(p.a,{key:Math.round(100*Math.random),path:"/signUp",render:function(){return s.a.createElement(S,{loggedIn:e.loggedIn})}}),s.a.createElement(p.a,{key:Math.round(100*Math.random),exact:!0,path:"/",render:function(){return s.a.createElement("div",null,s.a.createElement("h2",{className:"center"},"Please Log in To See Content"))}})]:[s.a.createElement(p.a,{key:Math.round(100*Math.random),exact:!0,path:"/quizz_app/tests",component:O}),s.a.createElement(p.a,{key:Math.round(100*Math.random),exact:!0,path:"/quizz_app/",component:q}),s.a.createElement(p.a,{key:Math.round(100*Math.random),exact:!0,path:"/quizz_app/form",component:z})])))}}]),t}(s.a.Component);l.a.render(s.a.createElement(U,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.aa45c5e2.chunk.js.map