<?php
include("../../database/connect_database.php");
        //Query that finds the total number of products that the user has added.
        $query = "SELECT * FROM products where product_quantity > 50";
        $result = $database->query($query);
        echo $database->error;

              $output = array();
              while($row = mysqli_fetch_assoc($result))
              {
                  $product = array  (	"id" => $row['id'],
                            "name" => $row['product_name'],
                            "quantity" => $row['product_quantity'],
                            "description" => $row['product_description'],
                            "category" => $row['product_category'],
                            "price" => $row['product_price']
                  );
                array_push($output,$product);
              }
              $json_ouput = json_encode($output);
              echo $json_ouput;
?>
