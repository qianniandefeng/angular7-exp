import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';

import { MainComponent } from './main/main.component';
import { CallComponent } from './call/call.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  // 声明模块的内部成员
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    SidebarComponent,
    FooterComponent,
    ArticleComponent,

    MainComponent,
    CallComponent,
    AboutComponent,
  ],
  // 导入其它模块
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  // 指定应用程序根级别需要使用的service
  providers: [],
  // app启动的根组件
  bootstrap: [AppComponent]
})
export class AppModule { }
