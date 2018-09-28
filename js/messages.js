class Message {
    constructor(text) {
        this.createdBy = currentLocation.what3words;
        this.latitude = currentLocation.latitiude;
        this.longitude = currentLocation.longitude;
        this.createdOn = new Date();
        this.createdOn = Date.now();
        this.expiresOn = new Date();
        this.expiresOn = Date.now();
        this.expiresOn.setMinutes(expiresOn.getMinutes() + 15);
        this.text = text;
        this.own = true;
    }
}
;