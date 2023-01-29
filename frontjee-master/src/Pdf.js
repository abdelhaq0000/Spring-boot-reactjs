import React, { Component } from "react";
import { render } from "react-dom";
import { Button } from "@mui/material";
import jsPDF from "jspdf";
import logo from './View/logo.jpg'

class Data extends Component {
    pdfGenerate = () => {
        var doc = new jsPDF("landscape", "px", "a4", "false");
        doc.addImage(logo, "PNG", 65, 20, 500, 400)
        doc.addPage()
        let j = 60;
        for (let i = 0; i < 10; i++) {
            doc.setFont("Helvertica", "bold")
            doc.text(60, j, "Name")
            doc.text(60, j + 20, "Email")
            doc.text(60, j + 40, "CIN")
            j = j + 60;
        }
        doc.addPage()
        doc.setFont("Helvertica", "bold")
        doc.text(60, 60, "Name")
        doc.text(60, 80, "Email")
        doc.text(60, 100, "CIN")
        doc.setFont("Helvertica", "normal")
        doc.text(60, 120, "Name")
        doc.text(60, 140, "Email")
        doc.text(60, 180, "CIN")
        doc.save("reactpdf.pdf")
    }
    render() {
        return (
            <div style={{ textAlign: "center" }}>
                <Button style={{ padding: "14px 20px", fontSize: "17px", fontWeight: "bold" }} variant="contained" color="primary" onClick={this.pdfGenerate}><i class="fa fa-save fa-1x" style={{ marginRight: "10px" }}></i>Download pdf</Button>
            </div>
        )
    }
}

export default Data