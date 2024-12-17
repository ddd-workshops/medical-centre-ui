import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { Appointment } from '../../contract';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  section: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 16,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 3,
  },
});

export const AppointmentPDF = ({ appointment }: { appointment: Appointment }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Appointment Details</Text>
      
      <View style={styles.section}>
        <Text style={styles.heading}>Basic Information</Text>
        <Text style={styles.text}>Date: {new Date(appointment.date).toLocaleDateString()}</Text>
        <Text style={styles.text}>Time: {new Date(appointment.date).toLocaleTimeString()}</Text>
        <Text style={styles.text}>Doctor: {appointment.doctor.name}</Text>
        <Text style={styles.text}>Specialty: {appointment.doctor.specialty}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Medical Notes</Text>
        <Text style={styles.text}>{appointment.medicalNotes || 'No medical notes available'}</Text>
      </View>

      {appointment.prescriptions && appointment.prescriptions.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.heading}>Prescriptions</Text>
          {appointment.prescriptions.map((prescription, index) => (
            <Text key={index} style={styles.text}>{prescription}</Text>
          ))}
        </View>
      )}

      <View style={styles.section}>
        <Text style={styles.heading}>Billing Information</Text>
        <Text style={styles.text}>Amount: ${appointment.billing?.amount || 0}</Text>
        <Text style={styles.text}>Status: {appointment.billing?.status || 'Pending'}</Text>
      </View>
    </Page>
  </Document>
);