import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Globalization } from 'ionic-native';

@Component({
    styles: [require('./main.component.scss').toString()],
    template: require('./main.component.html')
})
export class MainComponent {

    constructor(platform: Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Globalization.getPreferredLanguage().then(
                res => { },
                err => { }
            );
        });
    }
}