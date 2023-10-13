"use client";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { DateTime } from "luxon";
import { usePostData } from "@/hooks/useFetchting";
import useToastMessages from "@/hooks/useToast";

const BtnCreatePasien = ({ setIsRefetch }) => {
  const apiUrls = "http://localhost:3000/api/pasien";
  const [isPost, setIsPost] = useState(null);
  const [formData, setFormData] = useState({
    nama: "",
    kepada: "Tn",
    rekam_medis: "",
    status_pasien: "Rawat jalan",
    tanggal_daftar: DateTime.now().day,
    bulan_daftar: DateTime.now().month,
    tahun_daftar: DateTime.now().year,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { postData } = usePostData();
  const { showSuccessToast, showErrorToast } = useToastMessages();

  const handlePostPasien = async (e) => {
    setIsPost(true);
    e.preventDefault();
    try {
      await postData(apiUrls, formData);
      showSuccessToast("Pasien Berhasil Terdaftar");
    } catch (error) {
      showErrorToast("Gagal Untuk Mendaftarkan");
    } finally {
      setIsPost(null);
      setIsRefetch(true)
      onClose()
    }
  };

  return (
    <Box>
      <Button onClick={onOpen} colorScheme="green" variant="outline" w={"full"}>
        Tambah Pasien
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Pendaftaran Pasien</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={(e) => handlePostPasien(e)}>
            <ModalBody>
              <FormControl mb={4} isRequired>
                <FormLabel>Nama Pasien</FormLabel>
                <Input
                  type="text"
                  value={formData.nama}
                  onChange={(e) =>
                    setFormData({ ...formData, nama: e.target.value })
                  }
                />
              </FormControl>

              <FormControl mb={4} isRequired>
                <FormLabel>Kepada</FormLabel>
                <Select
                  value={formData.kepada}
                  onChange={(e) =>
                    setFormData({ ...formData, kepada: e.target.value })
                  }
                >
                  <option value="Tn">Tuan</option>
                  <option value="Ny">Nyonya</option>
                  <option value="Sdr">Saudara</option>
                </Select>
              </FormControl>

              <FormControl mb={4} isRequired>
                <FormLabel>Rekam Medis</FormLabel>
                <Input
                  type="text"
                  value={formData.rekam_medis}
                  onChange={(e) =>
                    setFormData({ ...formData, rekam_medis: e.target.value })
                  }
                />
              </FormControl>

              <FormControl mb={4} isRequired>
                <FormLabel>Status Pasien</FormLabel>
                <Select
                  value={formData.status_pasien}
                  onChange={(e) =>
                    setFormData({ ...formData, status_pasien: e.target.value })
                  }
                >
                  <option value="Rawat jalan">Rawat jalan</option>
                  <option value="Rawat inap">Rawat inap</option>
                  <option value="Traveling">Traveling</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                isLoading={isPost}
                type="submit"
                variant="outline"
                colorScheme="green"
              >
                Tambah Pasien
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default BtnCreatePasien;
