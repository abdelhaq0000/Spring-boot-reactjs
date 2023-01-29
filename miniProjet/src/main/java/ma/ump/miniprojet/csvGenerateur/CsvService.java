package ma.ump.miniprojet.csvGenerateur;

import ma.ump.miniprojet.model.Materiel;
import ma.ump.miniprojet.repository.MaterielRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.List;

@Service
public class CsvService {
    @Autowired
    private MaterielRepository materielService;
    public  ByteArrayInputStream createCsv() throws IOException {
        List<Materiel> materielList =materielService.findAll();
        ByteArrayOutputStream out = new ByteArrayOutputStream();
        OutputStreamWriter writer = new OutputStreamWriter(out);
        PrintWriter printWriter = new PrintWriter(writer);
        // Write the header of the CSV
        printWriter.println("NumeroInventaire,type,dateAcquisition,dateAffectation,FullName,CIN,email");
        // Write the data to the CSV
        for (Materiel m :materielList) {
            if(m.getUser()!=null) {
                printWriter.print(m.getNumeroInventaire() + ",");
                printWriter.print(m.getType() + ",");
                printWriter.print(m.getDateAcquisition() + ",");
                printWriter.print(m.getDateAffectation() + ",");
                printWriter.print(m.getUser().getFullName() + ",");
                printWriter.print(m.getUser().getCIN() + ",");
                printWriter.println(m.getUser().getEmail());
            }
        }
        printWriter.close();
        return new ByteArrayInputStream(out.toByteArray());
    }
}

