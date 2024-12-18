abstract class TakePhoto {
    constructor (
        public cameraMode: string,
        public filter: string
    ) {}
    
    abstract getSepia(): void
    abstract getAqua(): void
    getReelTime(): number {
        //complex calculation
        return 8
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("sepia");   
    }

    getAqua(): void {
        console.log("aqua");
    }

}

//! cannot create object from TakePhoto class
//? can be created from the Instagram class

//const cam = new TakePhoto("pro", "aqua") ❌
//const cam = new Instagram("professioal", "aqua", 8) ✅
