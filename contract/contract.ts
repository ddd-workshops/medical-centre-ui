/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
    "/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Login user */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["LoginRequest"];
                };
            };
            responses: {
                /** @description Login successful */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PatientProfile"];
                    };
                };
                /** @description Invalid credentials */
                401: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/register": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Register new patient */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["RegisterRequest"];
                };
            };
            responses: {
                /** @description Registration successful */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Invalid registration data */
                400: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
                /** @description Username or email already exists */
                409: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/auth/logout": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Logout user */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Logout successful */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get all appointments
         * @description Retrieve a list of all appointments
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AppointmentBrief"][];
                    };
                };
            };
        };
        put?: never;
        /** Create a new appointment */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["AppointmentCreateRequest"];
                };
            };
            responses: {
                /** @description Appointment created successfully */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AppointmentDetails"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/appointments/{appointmentId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get appointment details */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    appointmentId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Appointment details retrieved successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AppointmentDetails"];
                    };
                };
                /** @description Appointment not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        /** Update an appointment */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    appointmentId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["AppointmentUpdateRequest"];
                };
            };
            responses: {
                /** @description Appointment updated successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/referrals": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create a new referral */
        post: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["ReferralCreateRequest"];
                };
            };
            responses: {
                /** @description Referral created successfully */
                201: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Referral"];
                    };
                };
            };
        };
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/referrals/{referralId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Update a referral */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    referralId: string;
                };
                cookie?: never;
            };
            requestBody: {
                content: {
                    "application/json": components["schemas"]["ReferralUpdateRequest"];
                };
            };
            responses: {
                /** @description Referral updated successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notifications": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all notifications without full content */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of notifications */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["NotificationListItem"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notifications/{notificationId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a single notification with full content */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    notificationId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Complete notification details */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["Notification"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/notifications/{notificationId}/read": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Mark a notification as read */
        put: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    notificationId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Notification marked as read successfully */
                204: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cms/pages": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** List all available CMS pages */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of all pages */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CMSPageContent"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/cms/pages/{slug}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get CMS page content by slug */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    slug: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Page content retrieved successfully */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["CMSPageContent"];
                    };
                };
                /** @description Page not found */
                404: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content?: never;
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get patient profile
         * @description Retrieve the profile information of the logged-in patient
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PatientProfile"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/prescribed-treatments": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get prescribed treatments for a patient */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path: {
                    patientId: string;
                };
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description List of prescribed treatments */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["PrescribedTreatment"][];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/app-status": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get application status information
         * @description Retrieve the current status information for the application
         */
        get: {
            parameters: {
                query?: never;
                header?: never;
                path?: never;
                cookie?: never;
            };
            requestBody?: never;
            responses: {
                /** @description Successful response */
                200: {
                    headers: {
                        [name: string]: unknown;
                    };
                    content: {
                        "application/json": components["schemas"]["AppStatus"];
                    };
                };
            };
        };
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        AppointmentDetails: {
            /** Format: uuid */
            id: string;
            patient: components["schemas"]["PatientBrief"];
            doctor: components["schemas"]["DoctorBrief"];
            serviceType: components["schemas"]["ServiceType"];
            location: components["schemas"]["ClinicBrief"];
            /** Format: date-time */
            datetime: string;
            /** @enum {string} */
            status: "SCHEDULED" | "COMPLETED" | "CANCELLED";
            notes?: string;
            prescriptions?: string[];
            billing?: components["schemas"]["Billing"];
        };
        AppointmentBrief: {
            /** Format: uuid */
            id: string;
            patientName?: string;
            doctor: string;
            serviceType: string;
            location: string;
            /** Format: date-time */
            datetime: string;
            /** @enum {string} */
            status: "SCHEDULED" | "COMPLETED" | "CANCELLED";
        };
        AppointmentCreateRequest: {
            /** Format: uuid */
            patientId: string;
            /** Format: uuid */
            doctorId: string;
            /** Format: uuid */
            serviceTypeId: string;
            /** Format: date-time */
            datetime: string;
        };
        AppointmentUpdateRequest: {
            /** Format: uuid */
            appointmentId: string;
            /** Format: date-time */
            datetime?: string;
            time?: string;
            description?: string;
            /** @enum {string} */
            status?: "SCHEDULED" | "COMPLETED" | "CANCELLED";
        };
        Treatment: {
            /** Format: uuid */
            id: string;
            name: string;
            shortDescription: string;
            expectedDuration: {
                /** @description Minimum expected duration in minutes */
                min: number;
                /** @description Maximum expected duration in minutes */
                max: number;
            };
            priceRange: {
                /**
                 * Format: float
                 * @description Minimum price in the local currency
                 */
                min: number;
                /**
                 * Format: float
                 * @description Maximum price in the local currency
                 */
                max: number;
            };
            doctorBrief: components["schemas"]["DoctorBrief"];
            patientBrief: components["schemas"]["PatientBrief"];
        };
        PrescribedTreatment: {
            /** Format: uuid */
            id: string;
            /** Format: date-time */
            prescribedDate: string;
            /** Format: date-time */
            description?: string;
            patient: components["schemas"]["PatientBrief"];
            doctor: components["schemas"]["DoctorBrief"];
            treatment: components["schemas"]["Treatment"];
            appointments?: components["schemas"]["AppointmentBrief"][];
            /** @enum {string} */
            status: "SCHEDULED" | "IN_PROGRESS" | "COMPLETED" | "CANCELLED";
        };
        DoctorBrief: {
            /**
             * Format: uuid
             * @description Unique identifier for the doctor
             */
            id: string;
            /** @description Full name of the doctor including titles (e.g. "Dr. John Smith") */
            fullName: string;
            /** @description List of doctor's areas of specialization (e.g. ["Orthodontics", "Dental Surgery"]) */
            specialties: string[];
            locations?: components["schemas"]["ClinicBrief"][];
        };
        Referral: {
            /** Format: uuid */
            id: string;
            /** Format: uuid */
            patientId: string;
            /** Format: uuid */
            issuingDoctorId: string;
            targetSpecialty: string;
            diagnosis: string;
            recommendations: string;
            /** Format: date */
            issueDate: string;
            /** Format: date */
            expiryDate: string;
            /** @enum {string} */
            status: "ACTIVE" | "USED" | "EXPIRED";
        };
        ReferralCreateRequest: {
            /** Format: uuid */
            patientId: string;
            targetSpecialty: string;
            diagnosis: string;
            recommendations: string;
            /** Format: date */
            expiryDate: string;
        };
        ReferralUpdateRequest: {
            /**
             * Format: uuid
             * @description The ID of the referral to update
             */
            referralId: string;
            /** @enum {string} */
            status: "ACTIVE" | "USED" | "EXPIRED";
        };
        PatientBrief: {
            /**
             * Format: uuid
             * @description Unique identifier for the patient
             */
            id: string;
            /** @description Full name of the patient */
            fullName: string;
        };
        PatientProfile: {
            /** Format: uuid */
            patientId: string;
            firstName: string;
            lastName: string;
            phoneNumber: string;
            /** Format: email */
            email: string;
            address?: components["schemas"]["Address"];
        };
        LoginRequest: {
            username: string;
            password: string;
        };
        RegisterRequest: {
            /** Format: email */
            email: string;
            password: string;
            firstName: string;
            lastName: string;
            phoneNumber: string;
        };
        Address: {
            /**
             * Format: uuid
             * @description Unique identifier for the address
             */
            id: string;
            country: string;
            city: string;
            district?: string;
            street: string;
            postalCode: string;
        };
        ClinicBrief: {
            /**
             * Format: uuid
             * @description Unique identifier for the location
             */
            id: string;
            /** @description Name of the clinic */
            name: string;
            /** @description Full address including country, city, street and postal code */
            address: string;
        };
        ClinicDetails: {
            /**
             * Format: uuid
             * @description Unique identifier for the location
             */
            id: string;
            /** @description Name of the clinic */
            name: string;
            /** @description Full address including country, city, street and postal code */
            address: string;
            phone?: string;
            /** Format: email */
            email?: string;
            coordinates?: components["schemas"]["Coordinates"];
        };
        Document: {
            /**
             * Format: uuid
             * @description Unique identifier for the document
             */
            id: string;
            /** @description Name/title of the document */
            name: string;
            /** @description Detailed description or content of the document */
            description: string;
            /**
             * Format: date-time
             * @description Date and time when the document was created
             */
            createdAt: string;
            /**
             * Format: uri
             * @description URL to the document file in cloud storage
             */
            fileUrl: string;
            /** @description Brief information about the doctor who created the document */
            doctor: components["schemas"]["DoctorBrief"];
            /** @description Brief information about the patient the document is about */
            patient: components["schemas"]["PatientBrief"];
        };
        Notification: {
            /** Format: uuid */
            id: string;
            title: string;
            subtitle: string;
            /** Format: date */
            receivedDate: string;
            /** @default false */
            read: boolean;
            content: string;
        };
        NotificationListItem: {
            /** Format: uuid */
            id: string;
            title: string;
            subtitle: string;
            /** Format: date */
            receivedDate: string;
            /** @default false */
            read: boolean;
        };
        CMSPageContent: {
            slug: string;
            /** Format: date-time */
            lastUpdated: string;
            /** @description Markdown content */
            content: string;
        };
        ServiceType: {
            /** Format: uuid */
            id: string;
            name: string;
        };
        ServiceOffer: {
            /** Format: uuid */
            id: string;
            serviceType: string;
            /** @description Duration in minutes */
            duration: number;
            /** @description Price in the local currency */
            price: number;
            description: string;
        };
        Billing: {
            amount: number;
            /** @enum {string} */
            status: "PENDING" | "PAID" | "CANCELLED";
        };
        Coordinates: {
            latitude: number;
            longitude: number;
        };
        AppStatus: {
            /** @description Number of unread notifications */
            unreadNotificationsCount: number;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
