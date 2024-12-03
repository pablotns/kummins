import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.decomposition import PCA
from sklearn.cluster import KMeans

class DataProcessor:
    def __init__(self):

        self.df = pd.read_csv("C:/Users/PC/Desktop/encoded_data.csv")
        self.info = pd.read_csv("C:/Users/PC/Desktop/cleaned_data.csv")
        self.df_scaled = None
        self.pca_result = None
        self.kmeans_result = None
        self.centroids = None
        self.labels = None
        self.cantCluster1 = None
        self.cantCluster2 = None
        self.cantCluster3 = None
        self.cluster1 = None
        self.cluster2 = None
        self.cluster3 = None
        self.dato1 = None
        self.dato2 = None
        self.dato3 = None
        self.ccluster1 = None
        self.ccluster2 = None
        self.ccluster3 = None

    def process_data (self, n_components=2):
        scaler = MinMaxScaler()
        self.df_scaled = pd.DataFrame(scaler.fit_transform(self.df), columns=self.df.columns)
        pca = PCA(n_components=n_components)
        self.pca_result = pca.fit_transform(self.df_scaled)
        
    def process_kmeans(self, n_clusters=3):   
        kmeans = KMeans(n_clusters=n_clusters)
        self.kmeans_result = kmeans.fit(self.pca_result)
        self.centroids = kmeans.cluster_centers_
        self.labels = kmeans.labels_
    
    def process_results(self):
        coordenadas = self.pca_result.tolist()
        puntaje = self.df.values.tolist()
        etiqueta = self.labels.tolist()
        descripcion = self.info.values.tolist()
        
        coor_cluster1=[]
        coor_cluster2=[]
        coor_cluster3=[]

        cluster1=[]
        cluster2=[]
        cluster3=[]

        dato1 = []
        dato2 = []
        dato3 = []

        for n, a, i ,c in zip(puntaje, etiqueta,descripcion,coordenadas):
            if a == 0:
                cluster1.append(n)
                dato1.append(i)
                coor_cluster1.append(c)
            elif a == 1:
                cluster2.append(n)
                dato2.append(i)
                coor_cluster2.append(c)
            else:
                cluster3.append(n)
                dato3.append(i)
                coor_cluster3.append(c)

        self.cluster1 = cluster1
        self.cluster2 = cluster2
        self.cluster3 = cluster3

        self.dato1 = dato1
        self.dato2 = dato2
        self.dato3 = dato3

        self.ccluster1 = coor_cluster1
        self.ccluster2 = coor_cluster2
        self.ccluster3 = coor_cluster3

        self.cantCluster1 = len(coor_cluster1)
        self.cantCluster2 = len(coor_cluster2)
        self.cantCluster3 = len(coor_cluster3)

    def get_cluster (self):
        return self.cluster1,self.cluster2,self.cluster3
    
    def get_dataTabla (self):
        return self.dato1, self.dato2, self.dato3
    
    def get_coordenadas (self):
        return self.ccluster1,self.ccluster2,self.ccluster3
    
    def get_tabla(self):
        return self.df

    def get_tablaDesc(self):
        return self.info
    
    def get_centroids (self):
        return self.centroids.tolist()
    
    def get_transform (self):
        return self.pca_result.tolist()
    
    def get_cantPuntos(self):
        return self.cantCluster1, self.cantCluster2, self.cantCluster3


processor = DataProcessor()


# Ejemplo de uso
if __name__ == "__main__":
    processor = DataProcessor()
    processor.process_data()
    processor.process_kmeans()
    processor.process_results()

    v1, v2, v3 = processor.get_cantPuntos()

    print(v1)
    print(v2)
    print(v3)