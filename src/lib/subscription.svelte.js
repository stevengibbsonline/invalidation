class Subscription {
    data = $state();

    constructor(initialData){
        this.data = initialData;
    }

    async mutateData(newPayload){
        this.data = newPayload;
    }

}

export default Subscription;