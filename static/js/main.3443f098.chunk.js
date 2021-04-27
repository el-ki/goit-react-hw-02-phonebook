(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={form:"styles_form__3hPo1",btn:"styles_btn__1XlJL",label:"styles_label__2r-0q",input:"styles_input__H3hnN",list:"styles_list__1D_JL"}},17:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),r=n(10),s=n.n(r),l=n(11),i=n(4),o=n(5),u=n(7),b=n(6),h=n(9),j=n(3),d=n(19),m=n(1),f=n.n(m),O=n(0),p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleOnSubmit=function(e){e.preventDefault(),t.props.onSubmit(Object(h.a)(Object(h.a)({},t.state),{},{id:Object(d.a)()})),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("form",{className:f.a.form,onSubmit:this.handleOnSubmit,children:[Object(O.jsxs)("label",{className:f.a.label,children:["Name",Object(O.jsx)("input",{className:f.a.input,type:"text",value:this.state.name,onChange:this.handleInputChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(O.jsxs)("label",{className:f.a.label,children:["Number",Object(O.jsx)("input",{className:f.a.input,type:"tel",value:this.state.number,onChange:this.handleInputChange,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(O.jsx)("button",{className:f.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),v=function(t){var e=t.contactArray;return Object(O.jsx)("div",{children:0!==e.length&&Object(O.jsx)("ul",{children:e.map((function(t){return Object(O.jsxs)("li",{className:f.a.list,children:[t.name,": ",t.number]},t.id)}))})})},x=function(t){var e=t.value,n=t.onChange;return Object(O.jsxs)("label",{className:f.a.label,children:["Find contacts by name",Object(O.jsx)("input",{className:f.a.input,type:"text",value:e,onChange:n,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},C=function(t){var e=t.filterContacts,n=t.value,a=t.onDeleteContact;return Object(O.jsx)("div",{children:""!==n&&Object(O.jsx)("ul",{children:e.map((function(t){var e;return Object(O.jsxs)("li",{className:f.a.list,children:[t.name,": ",t.number,Object(O.jsx)("button",(e={className:f.a.input},Object(j.a)(e,"className",f.a.btn),Object(j.a)(e,"onClick",(function(){return a(t.id)})),Object(j.a)(e,"children","Delete"),e))]},t.id)}))})})},g=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){console.log(e),t.state.contacts.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[e])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}})),t.setState({filter:""})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state.filter.toLocaleLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return console.log(e),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)("h2",{children:"Phonebook"}),Object(O.jsx)(p,{onSubmit:this.formSubmitHandler}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(v,{contactArray:this.state.contacts}),Object(O.jsx)(x,{value:this.state.filter,onChange:this.changeFilter}),Object(O.jsx)(C,{filterContacts:e,value:this.state.filter,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3443f098.chunk.js.map