(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(9),i=n.n(c),o=n(10),s=n(2),l=n(3),u=n(6),d=n(5),b=n(8),h=n(4),j=n(18),m=n(0),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleInputChange=function(t){var n=t.currentTarget,a=n.name,r=n.value;e.setState(Object(h.a)({},a,r))},e.handleOnSubmit=function(t){t.preventDefault(),e.props.onSubmit(Object(b.a)(Object(b.a)({},e.state),{},{id:Object(j.a)()})),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("form",{onSubmit:this.handleOnSubmit,children:[Object(m.jsxs)("label",{children:["Name",Object(m.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleInputChange,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(m.jsxs)("label",{children:["Number",Object(m.jsx)("input",{type:"tel",value:this.state.number,onChange:this.handleInputChange,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(m.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=function(e){var t=e.contactArray;return Object(m.jsx)("div",{children:0!==t.length&&Object(m.jsx)("ul",{children:t.map((function(e){return Object(m.jsxs)("li",{children:[e.name,": ",e.number]},e.id)}))})})},p=function(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{children:["Find contacts by name",Object(m.jsx)("input",{type:"text",value:t,onChange:n,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]})},v=function(e){var t=e.filterContacts,n=e.value,a=e.onDeleteContact;return Object(m.jsx)("div",{children:""!==n&&Object(m.jsx)("ul",{children:t.map((function(e){return Object(m.jsxs)("li",{children:[e.name,": ",e.number,Object(m.jsx)("button",{onClick:function(){return a(e.id)},children:"Delete"})]},e.id)}))})})},x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.formSubmitHandler=function(t){console.log(t),e.state.contacts.find((function(e){return e.name===t.name}))?alert("".concat(t.name," is already in contacts")):e.setState((function(e){return{contacts:[].concat(Object(o.a)(e.contacts),[t])}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.filter.toLocaleLowerCase(),t=this.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}));return console.log(t),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h2",{children:"Phonebook"}),Object(m.jsx)(f,{onSubmit:this.formSubmitHandler}),Object(m.jsx)("h2",{children:"Contacts"}),Object(m.jsx)(O,{contactArray:this.state.contacts}),Object(m.jsx)(p,{value:this.state.filter,onChange:this.changeFilter}),Object(m.jsx)(v,{filterContacts:t,value:this.state.filter,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.81d8607e.chunk.js.map