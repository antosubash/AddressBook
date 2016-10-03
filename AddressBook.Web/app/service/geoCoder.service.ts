import { Injectable } from '@angular/core';
declare var google: any;
@Injectable()
export class GeocoadingService {

    public geocoder: any;
    public map: any;

    codeAddress(address: string) {
        var self = this;
        var latlng = new google.maps.LatLng(-34.397, 150.644);
        var mapOptions = {
            zoom: 8,
            center: latlng
        }
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        this.geocoder = new google.maps.Geocoder();

        this.geocoder.geocode({ 'address': address }, function (results: any, status: any) {
            if (status == 'OK') {
                self.map.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: self.map,
                    position: results[0].geometry.location
                });
            } else {
                console.log('Geocode was not successful for the following reason: ' + status);
            }
        })
    }
}