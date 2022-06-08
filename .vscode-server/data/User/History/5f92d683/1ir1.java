import com.squareup.okhttp.*;

class Main {
    public static void main(String[] args) {
        OkHttpClient client = new OkHttpClient().newBuilder().build();
        MediaType mediaType = MediaType.parse("application/json");
        RequestBody body = RequestBody.create(mediaType, "{\n    \"collection\":\"users\",\n    \"database\":\"bank3\",\n    \"dataSource\":\"Cluster0\",\n    \"projection\": {\"_id\": 1}\n\n}");
        Request request = new Request.Builder()
            .url("https://data.mongodb-api.com/app/data-pyqpj/endpoint/data/beta/action/findOne")
            .method("POST", body)
            .addHeader("Content-Type", "application/json")
            .addHeader("Access-Control-Request-Headers", "*")
            .addHeader("api-key", "<API_KEY>")
            .build();
        Response response = client.newCall(request).execute();
    }
}
