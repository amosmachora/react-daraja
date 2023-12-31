"use server";

import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { twMerge } from "tailwind-merge";
import { fetchQrCode } from "../wrapper-fns";
import { ScannableQrParams } from "../../types";

export const QRCodeDisplay = async ({
  className,
  scannableQRParams,
}: {
  className?: string;
  scannableQRParams: ScannableQrParams;
}) => {
  const { QRCode } = await fetchQrCode(scannableQRParams);
  const qrImage = new Image();
  qrImage.src = `data:image/png;base64,${QRCode}`;

  return (
    <div className={twMerge(`w-16 aspect-square`, className)}>
      {QRCode ? (
        <img src={qrImage.src} alt="QR Code" className="w-full h-full" />
      ) : (
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="center-absolutely text-green-500"
          spin
        />
      )}
    </div>
  );
};