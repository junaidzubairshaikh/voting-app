import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective {

  constructor() { }

  @Input() set setRoles(roles:unknown) {

  }

  @Input() set setRolesFor(role: string){
    
  }

}
