import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import BasicTableOne from "@/components/tables/PastOrders";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Next.js Basic Table | RobbingHood - Next.js Dashboard Template",
  description:
    "This is Next.js Basic Table  page for RobbingHood  Tailwind CSS Admin Dashboard Template",
  // other metadata
};

export default function BasicTables() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Past Transactions" />
      <div className="space-y-6">
        <ComponentCard title="Past Orders">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </div>
  );
}