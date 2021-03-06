import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
    useExisting:forwardRef(()=>RadioComponent),
    multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]
  value: any
  onChange:any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value
    this.onChange(this.value)
  }


  // Implementações da Interface ControlValueAcess
  writeValue(obj: any) {
    this.value = obj
  }

  registerOnChange(fn: any) {
    this.onChange=fn
  }

  registerOnTouched(fn: any) { }
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {}
  /**
   * Used to provide a {@link ControlValueAccessor} for form controls.
   *
   * See {@link DefaultValueAccessor} for how to implement one.
   * @stable
   */

}
