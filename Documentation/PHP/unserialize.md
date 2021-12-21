https://www.php.net/manual/de/function.unserialize.php



            $value = unserialize($value['fontUpload']);
            dump($value);
            dump(FilesModel::findMultipleByUuids($value));