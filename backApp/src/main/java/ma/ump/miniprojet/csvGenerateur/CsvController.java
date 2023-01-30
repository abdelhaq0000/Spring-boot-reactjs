package ma.ump.miniprojet.csvGenerateur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayInputStream;
import java.io.IOException;

@RestController
public class CsvController {
    @Autowired
    private CsvService csvService;
    @GetMapping("/download-csv")
    public ResponseEntity<InputStreamResource> downloadCsv() throws IOException {
        ByteArrayInputStream bis = csvService.createCsv();

        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=MatterielAffectt.csv");

        return ResponseEntity
                .ok()
                .headers(headers)
                .contentType(MediaType.parseMediaType("text/csv"))
                .body(new InputStreamResource(bis));
    }
}
