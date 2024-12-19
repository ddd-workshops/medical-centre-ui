import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import type { AppointmentDetails } from '../../contract/types';

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

export const AppointmentPDF = ({ appointment }: { appointment: AppointmentDetails }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Appointment Details</Text>
      
      <View style={styles.section}>
        <Text style={styles.heading}>Basic Information</Text>
        <Text style={styles.text}>Date: {new Date(appointment.datetime).toLocaleDateString()}</Text>
        <Text style={styles.text}>Time: {new Date(appointment.datetime).toLocaleTimeString()}</Text>
        <Text style={styles.text}>Doctor: {appointment.doctor.fullName}</Text>
        <Text style={styles.text}>Specialties: {appointment.doctor.specialties.join(', ')}</Text>
        <Text style={styles.text}>Location: {appointment.location.name}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Medical Notes</Text>
        <Text style={styles.text}>{appointment.notes || 'No medical notes available'}</Text>
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
        <Text style={styles.text}>Status: {appointment.billing?.status || 'PENDING'}</Text>
      </View>
    </Page>
  </Document>
);