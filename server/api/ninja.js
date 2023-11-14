export default defineEventHandler(async (event) => {

    // //handle query params
    // const { name } = useQuery(event);

    // //handle post data
    // const { age } = await useBody(event);

    //api call with private key
    const { data } = await $fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_VKksk0fBEuy1DtxDoK0dYWlJSwzFmNMIyRIdnd5C');

    return data;
});