// the start/root module that tells Angular how to assemble the application.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ColorPickerModule } from 'ngx-color-picker';

import { Ng5SliderModule } from 'ng5-slider';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { HomeComponent } from './home/home.component';
import { HeaderComponent, DialogInfo } from './header/header.component';
import { EditorComponent, DialogDocProperty, DialogDocName } from './editor/editor.component';
import { LabComponent } from './lab/lab.component';
import { DeviceComponent } from './device/device.component';
import { DevicePropertyComponent } from './device/device-property/device-property.component';
import { TagPropertyComponent } from './device/tag-property/tag-property.component';
import { DeviceListComponent } from './device/device-list/device-list.component';
import { DeviceMapComponent } from './device/device-map/device-map.component';
import { FuxaViewComponent } from './fuxa-view/fuxa-view.component';
import { TesterComponent } from './tester/tester.component';
import { customHttpProvider } from './_helpers/custom-http';
import { TesterService } from './tester/tester.service';
import { ProjectService } from './_services/project.service';
import { HmiService } from './_services/hmi.service';
import { TutorialComponent } from './help/tutorial/tutorial.component';
import { WindowRef } from './_helpers/windowref';
import { Utils, EnumToArrayPipe } from './_helpers/utils';
import { Dictionary } from './_helpers/dictionary';
import { NgxFabButtonComponent } from './gui-helpers/fab-button/ngx-fab-button.component';
import { NgxFabItemButtonComponent } from './gui-helpers/fab-button/ngx-fab-item-button.component';

import { DialogDraggableDirective } from './_directives/dialog-draggable.directive';
import { ModalPositionCache } from './_directives/modal-position.cache';
import { DraggableDirective } from './_directives/ngx-draggable.directive';
import { NumberOnlyDirective } from './_directives/number.directive';

import { GaugesManager } from './gauges/gauges.component';
import { GaugeBaseComponent } from './gauges/gauge-base/gauge-base.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { SwitchComponent } from './gauges/switch/switch.component';
import { ValueComponent } from './gauges/controls/value/value.component';

import { CompressorComponent } from './gauges/proc-eng/compressor/compressor.component';
import { ExchangerComponent } from './gauges/proc-eng/exchanger/exchanger.component';
import { ValveComponent } from './gauges/proc-eng/valve/valve.component';
import { MotorComponent } from './gauges/proc-eng/motor/motor.component';
import { GaugePropertyComponent } from './gauges/gauge-property/gauge-property.component';
import { FlexInputComponent } from './gauges/gauge-property/flex-input/flex-input.component';
import { FlexHeadComponent } from './gauges/gauge-property/flex-head/flex-head.component';
import { FlexEventComponent } from './gauges/gauge-property/flex-event/flex-event.component';
import { MatSelectSearchModule } from './gui-helpers/mat-select-search/mat-select-search.module';
import { HtmlInputComponent } from './gauges/controls/html-input/html-input.component';
import { HtmlButtonComponent } from './gauges/controls/html-button/html-button.component';
import { HtmlSelectComponent } from './gauges/controls/html-select/html-select.component';
import { GaugeProgressComponent } from './gauges/controls/gauge-progress/gauge-progress.component';
import { GaugeSemaphoreComponent } from './gauges/controls/gauge-semaphore/gauge-semaphore.component';

@NgModule({
  declarations: [
    HomeComponent,
    EditorComponent,
    HeaderComponent,
    AppComponent,
    LabComponent,
    DeviceComponent,
    TagPropertyComponent,
    DevicePropertyComponent,
    DeviceListComponent,
    DeviceMapComponent,
    FuxaViewComponent,
    DialogDocProperty,
    DialogDocName,
    DialogInfo,
    GaugeBaseComponent,
    SwitchComponent,
    CompressorComponent,
    ValveComponent,
    MotorComponent,
    ExchangerComponent,
    HtmlInputComponent,
    HtmlButtonComponent,
    HtmlSelectComponent,
    GaugeProgressComponent,
    GaugeSemaphoreComponent,
    GaugePropertyComponent,
    TesterComponent,
    TutorialComponent,
    FlexInputComponent,
    FlexHeadComponent,
    FlexEventComponent,
    DynamicComponent,
    ValueComponent,
    DialogDraggableDirective,
    EnumToArrayPipe,
    DraggableDirective,
    NumberOnlyDirective,
    NgxFabButtonComponent,
    NgxFabItemButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing,    
    MaterialModule,
    BrowserAnimationsModule,
    ColorPickerModule,
    Ng5SliderModule,
    MatSelectSearchModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
    }),
  ],
  providers: [
    HmiService,
    ProjectService,
    TesterService,
    customHttpProvider,
    GaugesManager,    
    WindowRef,
    Utils,
    Dictionary,
    ModalPositionCache
  ],
  entryComponents: [
    DialogDocProperty, 
    DialogDocName,
    DialogInfo,
    DynamicComponent,
    GaugePropertyComponent,
    DevicePropertyComponent,
    TagPropertyComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
