import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const PDFDocument = ({ formInModal, results, skinDescription }) => (
  <Document>
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        Hasil
      </Text>
      <View style={styles.section}>
        <Text style={styles.subHeader}>Informasi Pengguna</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Nama Lengkap:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formInModal.name}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Umur:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formInModal.age}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Jenis Kelamin:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{formInModal.gender}</Text>
            </View>
          </View>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Jenis Kulit:</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{results}</Text>
            </View>
          </View>
        </View>
      </View>

      {skinDescription && (
        <>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Informasi Jenis Kulit</Text>
            <Text>{skinDescription.title}</Text>
            <Text>{skinDescription.description}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subHeader}>Solusi Perawatan</Text>
            <Text>{skinDescription.solution}</Text>
          </View>
        </>
      )}
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 5,
  },
  table: {
    display: "table",
    width: "auto",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#000",
  },
  tableCell: {
    margin: 5,
    fontSize: 12,
  },
});

export default PDFDocument;
