"use strict";(self.webpackChunkproway_computers=self.webpackChunkproway_computers||[]).push([[642],{2642:(E,l,m)=>{m.r(l),m.d(l,{ContatoModule:()=>y});var s=m(6895),i=m(9541),e=m(433),o=m(1571);function c(n,a){1&n&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa de no m\xednimo 4 caracteres. "),o.qZA())}function f(n,a){1&n&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function d(n,a){1&n&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa de no m\xednimo 10 caracteres. "),o.qZA())}function p(n,a){1&n&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function u(n,a){1&n&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa de no m\xednimo 11 caracteres. "),o.qZA())}function C(n,a){1&n&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function g(n,a){1&n&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa ser um e-mail v\xe1lido. "),o.qZA())}function h(n,a){1&n&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}function _(n,a){1&n&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa de no m\xednimo 20 caracteres. "),o.qZA())}function v(n,a){1&n&&(o.TgZ(0,"small",11),o._uU(1," Esse campo precisa ser preenchido. "),o.qZA())}const Z=[{path:"",component:(()=>{class n{constructor(r){this.fb=r,this.formContato=this.fb.group({nome:["",[e.kI.minLength(4),e.kI.required]],assunto:["",[e.kI.minLength(10),e.kI.required]],telefone:["",[e.kI.minLength(11),e.kI.required]],email:["",[e.kI.email,e.kI.required]],mensagem:["",[e.kI.minLength(20),e.kI.required]]})}ngOnInit(){throw new Error("Method not implemented.")}enviarFormulario(){alert("A mensagem foi enviada!"),this.formContato.reset()}}return n.\u0275fac=function(r){return new(r||n)(o.Y36(e.qu))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-contato"]],decls:35,vars:32,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Informe o seu nome","formControlName","nome"],["class","error-message",4,"ngIf"],["type","assunto","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(00) 0 0000-0000","mask","(00) 0 0000-0000","formControlName","telefone"],["type","email","placeholder","Digite o seu e-mail","formControlName","email"],["maxlength","300","placeholder","Digite a sua mensagem...","formControlName","mensagem","rows","4"],["type","submit",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5750907897846!2d-49.0724960849549!3d-26.91697718312573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df18c3b4a71d65%3A0xa5ec9dd8406a6a7!2sProWay!5e0!3m2!1spt-BR!2sbr!4v1681011654641!5m2!1spt-BR!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],[1,"error-message"]],template:function(r,t){1&r&&(o.TgZ(0,"h2",0),o._uU(1,"Entre em contato"),o.qZA(),o.TgZ(2,"section",1)(3,"form",2),o.NdJ("ngSubmit",function(){return t.enviarFormulario()}),o._UZ(4,"input",3),o.TgZ(5,"div"),o._uU(6," *ngIf=\"formContato.controls['nome'].invalid && (formContato.controls['nome'].touched || formContato.controls['nome'].dirty)\" "),o.YNc(7,c,2,0,"small",4),o.YNc(8,f,2,0,"small",4),o.qZA(),o._UZ(9,"input",5),o.TgZ(10,"div"),o._uU(11," *ngIf=\"formContato.controls['assunto'].invalid && (formContato.controls['assunto'].touched || formContato.controls['assunto'].dirty)\" "),o.YNc(12,d,2,0,"small",4),o.YNc(13,p,2,0,"small",4),o.qZA(),o._UZ(14,"input",6),o.TgZ(15,"div"),o._uU(16," *ngIf=\"formContato.controls['telefone'].invalid && (formContato.controls['telefone'].touched || formContato.controls['telefone'].dirty)\" "),o.YNc(17,u,2,0,"small",4),o.YNc(18,C,2,0,"small",4),o.qZA(),o._UZ(19,"input",7),o.TgZ(20,"div"),o._uU(21," *ngIf=\"formContato.controls['email'].invalid && (formContato.controls['email'].touched || formContato.controls['email'].dirty)\" "),o.YNc(22,g,2,0,"small",4),o.YNc(23,h,2,0,"small",4),o.qZA(),o._UZ(24,"textarea",8),o.TgZ(25,"div"),o._uU(26," *ngIf=\"formContato.controls['mensagem'].invalid && (formContato.controls['mensagem'].touched || formContato.controls['mensagem'].dirty)\" "),o.YNc(27,_,2,0,"small",4),o.YNc(28,v,2,0,"small",4),o.qZA(),o.TgZ(29,"button",9),o._uU(30,"Enviar"),o.qZA()(),o.TgZ(31,"address"),o._UZ(32,"iframe",10),o.TgZ(33,"p"),o._uU(34,"R. 7 de Setembro, 1600 - 14\xba andar - Centro, Blumenau - SC, 89010-204"),o.qZA()()()),2&r&&(o.xp6(3),o.Q6J("formGroup",t.formContato),o.xp6(1),o.ekj("valid",t.formContato.controls.nome.valid)("invalid",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),o.xp6(3),o.Q6J("ngIf",t.formContato.controls.nome.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",t.formContato.controls.nome.hasError("required")),o.xp6(1),o.ekj("valid",t.formContato.controls.assunto.valid)("invalid",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),o.xp6(3),o.Q6J("ngIf",t.formContato.controls.assunto.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",t.formContato.controls.assunto.hasError("required")),o.xp6(1),o.ekj("valid",t.formContato.controls.telefone.valid)("invalid",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),o.xp6(3),o.Q6J("ngIf",t.formContato.controls.telefone.hasError("minlength")),o.xp6(1),o.Q6J("ngIf",t.formContato.controls.telefone.hasError("required")),o.xp6(1),o.ekj("valid",t.formContato.controls.email.valid)("invalid",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),o.xp6(3),o.Q6J("ngIf",t.formContato.controls.email.hasError("email")),o.xp6(1),o.Q6J("ngIf",t.formContato.controls.email.hasError("required")),o.xp6(1),o.ekj("valid",t.formContato.controls.mensagem.valid)("invalid",t.formContato.controls.mensagem.invalid&&(t.formContato.controls.mensagem.touched||t.formContato.controls.mensagem.dirty)),o.xp6(3),o.Q6J("ngIf",t.formContato.controls.mensagem.hasError("mensagem")),o.xp6(1),o.Q6J("ngIf",t.formContato.controls.mensagem.hasError("required")),o.xp6(1),o.Q6J("disabled",t.formContato.invalid))},dependencies:[s.O5,e._Y,e.Fj,e.JJ,e.JL,e.nD,e.sg,e.u],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),n})()}];let T=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[i.Bz.forChild(Z),i.Bz]}),n})(),y=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[s.ez,T,e.UX]}),n})()}}]);