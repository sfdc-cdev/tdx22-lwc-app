public with sharing class BearController {
    @AuraEnabled(Cacheable=true)
    public static Bear__c[] getAllBears() {
        return [
            SELECT
                Id,
                Name,
                Age__c,
                Sex__c,
                Height__c,
                Weight__c,
                Location__Latitude__s,
                Location__Longitude__s,
                Supervisor__r.Name
            FROM Bear__c
            WITH SECURITY_ENFORCED
            ORDER BY Name
            LIMIT 50
        ];
    }
}
