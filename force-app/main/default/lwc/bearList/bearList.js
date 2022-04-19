import { LightningElement, wire } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
/** BearController.getAllBears() Apex method */
import getAllBears from '@salesforce/apex/BearController.getAllBears';
export default class BearList extends LightningElement {
    @wire(getAllBears) bears;
    appResources = {
        bearSilhouette: `${ursusResources}/img/standing-bear-silhouette.png`,
    };
}